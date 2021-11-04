import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsExampleComponent } from './views-example.component';

describe('ViewsExampleComponent', () => {
  let component: ViewsExampleComponent;
  let fixture: ComponentFixture<ViewsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
