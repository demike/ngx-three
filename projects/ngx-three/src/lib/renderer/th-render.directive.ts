import { Directive, Input, Output, inject } from '@angular/core';
import { ThEngineService } from '../ThEngine.service';
import { ThAnimationLoopService } from './th-animation-loop.service';

@Directive({
    selector: '[beforeRender], [onResize], [renderOnDemand]',
    standalone: false
})
export class ThRenderDirective {
  private engineService = inject(ThEngineService);
  private animationLoopService = inject(ThAnimationLoopService);


  @Output()
  public get beforeRender() {
    return this.engineService.beforeRender$;
  }

  @Output()
  public get onResize() {
    return this.engineService.resize$;
  }

  @Input()
  public set renderOnDemand(onDemand: boolean) {
    if (onDemand) {
      this.animationLoopService.stop();
    } else {
      this.animationLoopService.start();
    }
  }

  public get renderOnDemand() {
    return !this.animationLoopService.isActive();
  }
}
