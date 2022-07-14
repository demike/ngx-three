import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandExampleComponent } from './on-demand-example.component';

describe('OnDemandExampleComponent', () => {
  let component: OnDemandExampleComponent;
  let fixture: ComponentFixture<OnDemandExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDemandExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDemandExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
