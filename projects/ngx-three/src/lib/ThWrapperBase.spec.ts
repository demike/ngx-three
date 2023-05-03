import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventDispatcher } from 'three';
import { ThWrapperBase } from './ThWrapperBase';

class ExampleObj extends EventDispatcher {
  public dispose() {
    // do nothing
  }
}

@Component({
  selector: 'th-wrapper-impl',
  template: ''
})
class ThWrapperImplComponent extends ThWrapperBase<ExampleObj, any> {
  getType() {
    return ExampleObj;
  }
}

describe('ThWrapperBase', () => {
  let component: ThWrapperImplComponent;
  let fixture: ComponentFixture<ThWrapperImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThWrapperBase]
    }).compileComponents();

    fixture = TestBed.createComponent(ThWrapperImplComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();

    expect(component.objRef).toBeDefined();
  });

  it('should dispose on destroy', () => {
    fixture.detectChanges();
    expect(component.objRef).toBeDefined();

    const disposeSpy = spyOn(component.objRef as ExampleObj, 'dispose');

    fixture.destroy();

    expect(disposeSpy).toHaveBeenCalledOnceWith();
  });

  describe('three js event handling', () => {
    it('should bind three js events', () => {
      let callCnt = 0;
      const callback = () => callCnt++;

      fixture.detectChanges();

      component.threeEvents = {
        event1: callback,
        event2: callback
      };

      component.objRef?.dispatchEvent({ type: 'event1' });
      component.objRef?.dispatchEvent({ type: 'event2' });
      expect(callCnt).toBe(2);
    });

    it('should unbind three js events on destroy', () => {
      let callCnt = 0;
      const callback = () => callCnt++;

      fixture.detectChanges();

      const obj = component.objRef as ExampleObj;
      const addEventSpy = spyOn(obj, 'addEventListener').and.callThrough();
      const removeEventSpy = spyOn(obj, 'removeEventListener').and.callThrough();

      const events = {
        event1: callback,
        event2: callback
      };
      component.threeEvents = events;

      expect(component.threeEvents).toBe(events);
      component.ngOnDestroy();

      expect(component.threeEvents).toBeUndefined();
      expect(addEventSpy.length).toBe(2);
      expect(removeEventSpy.length).toBe(2);
    });
  });
});
