import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeComponent } from './code.component';
import { EditorService } from './EditorService';

describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeComponent],
      providers: [EditorService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
