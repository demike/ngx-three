import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThWrapperBase } from './ThWrapperBase';

class ExampleObj {
  public dispose() {
    // do nothing
  }
}

@Component({
  selector: 'th-wrapper-impl',
  template: ''
})
class ThWrapperImplComponent extends ThWrapperBase<any, any> {
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

    const disposeSpy = spyOn(component.objRef, 'dispose');

    fixture.destroy();

    expect(disposeSpy).toHaveBeenCalledOnceWith();
  });
});
