import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlWithCSS3dExampleComponent } from './html-with-css3d-example.component';
import { HtmlExampleComponent } from '../html-example/html-example.component';

describe('HtmlExampleComponent', () => {
  let component: HtmlWithCSS3dExampleComponent;
  let fixture: ComponentFixture<HtmlWithCSS3dExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlWithCSS3dExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
