import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSceneExampleComponent } from './multi-scene-example.component';

describe('MultiSceneExampleComponent', () => {
  let component: MultiSceneExampleComponent;
  let fixture: ComponentFixture<MultiSceneExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSceneExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSceneExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
