import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancedGLBExampleComponent } from './instanced-glb-example.component';

describe('LoaderExampleComponent', () => {
  let component: InstancedGLBExampleComponent;
  let fixture: ComponentFixture<InstancedGLBExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstancedGLBExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstancedGLBExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
