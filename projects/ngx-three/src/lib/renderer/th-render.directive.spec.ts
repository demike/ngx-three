import { Subject } from 'rxjs';
import { ThEngineService } from '../ThEngine.service';
import { ThRenderDirective } from './th-render.directive';
import { ThAnimationLoopService } from './th-animation-loop.service';

describe('ThRenderDirective', () => {
  let engineServiceMock: Partial<ThEngineService>;
  let animationLoopService: jasmine.SpyObj<ThAnimationLoopService>;
  let directive: ThRenderDirective;
  beforeEach(() => {
    engineServiceMock = {
      beforeRender$: new Subject<any>(),
      resize$: new Subject<any>()
    };

    animationLoopService = jasmine.createSpyObj<ThAnimationLoopService>('ThAnimationLoopService', ['start', 'stop']);
    directive = new ThRenderDirective(
      engineServiceMock as ThEngineService,
      animationLoopService as ThAnimationLoopService
    );
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
