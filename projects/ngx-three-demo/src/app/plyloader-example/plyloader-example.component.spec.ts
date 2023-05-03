import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxThreeModule } from 'ngx-three';

import { PLYLoaderExampleComponent } from './plyloader-example.component';

describe('PLYLoaderExampleComponent', () => {
  let component: PLYLoaderExampleComponent;
  let fixture: ComponentFixture<PLYLoaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PLYLoaderExampleComponent],
      imports: [NgxThreeModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PLYLoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
