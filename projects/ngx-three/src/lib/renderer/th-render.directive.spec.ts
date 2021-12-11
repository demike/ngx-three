import { Subject } from 'rxjs';
import { ThEngineService } from '../ThEngine.service';
import { ThRenderDirective } from './th-render.directive';

describe('ThRenderDirective', () => {
  let engineServiceMock: Partial<ThEngineService>;
  beforeEach(() => {
    engineServiceMock = {
      beforeRender$: new Subject<any>()
    };
  });
  it('should create an instance', () => {
    const directive = new ThRenderDirective(engineServiceMock as ThEngineService);
    expect(directive).toBeTruthy();
  });

  it('should emit on beforeRender', (done) => {
    const directive = new ThRenderDirective(engineServiceMock as ThEngineService);
    directive.beforeRender.subscribe(() => {
      done();
    });

    (engineServiceMock.beforeRender$ as Subject<any>).next(engineServiceMock);
  });
});
