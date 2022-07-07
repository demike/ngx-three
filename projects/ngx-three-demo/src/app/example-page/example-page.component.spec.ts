import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditorService } from '../code/EditorService';

import { ExamplePageComponent } from './example-page.component';

describe('ExamplePageComponent', () => {
  let component: ExamplePageComponent;
  let fixture: ComponentFixture<ExamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [EditorService],
      declarations: [ExamplePageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
