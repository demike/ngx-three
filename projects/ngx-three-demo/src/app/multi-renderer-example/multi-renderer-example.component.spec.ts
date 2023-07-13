import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRendererExampleComponent } from './multi-renderer-example.component';

describe('MultiViewPostprocessingComponent', () => {
  let component: MultiRendererExampleComponent;
  let fixture: ComponentFixture<MultiRendererExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiRendererExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRendererExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
