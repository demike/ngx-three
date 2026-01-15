import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoaderExampleComponent } from './dynamic-loader-example.component';

describe('DynamicLoaderExampleComponent', () => {
  let component: DynamicLoaderExampleComponent;
  let fixture: ComponentFixture<DynamicLoaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicLoaderExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
