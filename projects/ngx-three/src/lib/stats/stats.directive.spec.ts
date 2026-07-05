import { ChangeDetectionStrategy, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StatsDirective } from './stats.directive';
import { ThEngineService } from '../ThEngine.service';
import { Subject } from 'rxjs';

@Component({
  template: `<th-canvas [thStats]></th-canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StatsDirective],
})
class TestHostComponent {}

describe('StatsDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    const engineServiceMock = {
      beforeRender$: new Subject<any>(),
      resize$: new Subject<any>(),
    };

    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: ThEngineService, useValue: engineServiceMock }],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(StatsDirective))?.injector.get(StatsDirective);
    expect(directive).toBeTruthy();
  });
});
