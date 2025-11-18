import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlExampleComponent } from './html-example.component';

describe('HtmlExampleComponent', () => {
  let component: HtmlExampleComponent;
  let fixture: ComponentFixture<HtmlExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
