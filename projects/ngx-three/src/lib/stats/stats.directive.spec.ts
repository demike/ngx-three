import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StatsDirective } from './stats.directive';
import { ThCanvas } from 'ngx-three';

@Component({
  template: `<th-canvas [thStats]></th-canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThCanvas, StatsDirective],
})
class TestHostComponent {}

describe('StatsDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(StatsDirective)).injector.get(StatsDirective);
    expect(directive).toBeTruthy();
  });
});
