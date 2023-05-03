import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { RefByIdExampleComponent } from './ref-by-id-example.component';

describe('RefByIdExampleComponent', () => {
  let component: RefByIdExampleComponent;
  let fixture: ComponentFixture<RefByIdExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RefByIdExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
