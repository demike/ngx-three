import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiViewPostprocessingExampleComponent } from './multi-view-postprocessing-example.component';

describe('MultiViewPostprocessingComponent', () => {
  let component: MultiViewPostprocessingExampleComponent;
  let fixture: ComponentFixture<MultiViewPostprocessingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiViewPostprocessingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiViewPostprocessingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
