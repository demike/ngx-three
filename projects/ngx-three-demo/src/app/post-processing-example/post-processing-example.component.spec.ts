import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProcessingExampleComponent } from './post-processing-example.component';

describe('PostProcessingExampleComponent', () => {
  let component: PostProcessingExampleComponent;
  let fixture: ComponentFixture<PostProcessingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostProcessingExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProcessingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
