import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { ThEngineService } from '../ThEngine.service';
import { ThRenderDirective } from './th-render.directive';
import { ThAnimationLoopService } from './th-animation-loop.service';

@Component({
  template: `<div (beforeRender)="test()"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThRenderDirective],
})
class TestHostComponent {
  public test() {}
}

describe('ThRenderDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: ThRenderDirective;
  let engineServiceMock: Partial<ThEngineService>;
  let animationLoopService: jasmine.SpyObj<ThAnimationLoopService>;

  beforeEach(() => {
    engineServiceMock = {
      beforeRender$: new Subject<any>(),
      resize$: new Subject<any>(),
    };
    animationLoopService = jasmine.createSpyObj<ThAnimationLoopService>('ThAnimationLoopService', ['start', 'stop']);

    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [
        { provide: ThEngineService, useValue: engineServiceMock },
        { provide: ThAnimationLoopService, useValue: animationLoopService },
      ],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const debugEl: DebugElement = fixture.debugElement.query(By.directive(ThRenderDirective));
    directive = debugEl.injector.get(ThRenderDirective);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should emit on beforeRender', (done) => {
    directive.beforeRender.subscribe(() => {
      done();
    });

    (engineServiceMock.beforeRender$ as Subject<any>).next(engineServiceMock);
  });

  it('should emit on resize', (done) => {
    directive.onResize.subscribe(() => {
      done();
    });

    (engineServiceMock.resize$ as Subject<any>).next({ width: 800, height: 600 });
  });

  it('should enable/disable ondemand rendering', () => {
    directive.renderOnDemand = true;
    expect(animationLoopService.stop).toHaveBeenCalledTimes(1);
    directive.renderOnDemand = false;
    expect(animationLoopService.start).toHaveBeenCalledTimes(1);
    directive.renderOnDemand = true;
    expect(animationLoopService.stop).toHaveBeenCalledTimes(2);
    directive.renderOnDemand = false;
    expect(animationLoopService.start).toHaveBeenCalledTimes(2);
  });
});
