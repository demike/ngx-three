import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsExampleComponent } from './controls-example.component';

describe('ControlsExampleComponent', () => {
  let component: ControlsExampleComponent;
  let fixture: ComponentFixture<ControlsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlsExampleComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
