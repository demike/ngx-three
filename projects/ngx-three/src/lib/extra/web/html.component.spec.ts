import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxThreeModule } from '../../ngx-three.module';

import { HtmlComponent } from './html.component';

describe('HtmlComponent', () => {
  let component: HtmlComponent;
  let fixture: ComponentFixture<HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxThreeModule],
      declarations: [ HtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
