import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebXRExampleComponent } from './webxr-example.component';

describe('WebXRExampleComponent', () => {
  let component: WebXRExampleComponent;
  let fixture: ComponentFixture<WebXRExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebXRExampleComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebXRExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
