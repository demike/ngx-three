import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancedMeshExampleComponent } from './instanced-mesh-example.component';

describe('InstancedMeshExampleComponent', () => {
  let component: InstancedMeshExampleComponent;
  let fixture: ComponentFixture<InstancedMeshExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstancedMeshExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstancedMeshExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
