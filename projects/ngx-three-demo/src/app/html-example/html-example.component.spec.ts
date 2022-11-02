import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { HtmlExampleComponent } from './html-example.component';

describe('RefByIdExampleComponent', () => {
  let component: HtmlExampleComponent;
  let fixture: ComponentFixture<HtmlExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
