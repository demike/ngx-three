import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { ThEngineService } from '../ThEngine.service';
import Stats from 'three/examples/jsm/libs/stats.module';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[thStats]'
})
export class StatsDirective implements OnInit, OnDestroy {
  private stats: Stats;
  private renderSubscription?: Subscription;
  constructor(private engineService: ThEngineService) {
    this.stats = Stats();
  }
  ngOnDestroy(): void {
    if(this.renderSubscription) {
      this.renderSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    if(!this.engineService.canvas) {
      throw new Error('No canvas present');
    }

    const parentElement = this.engineService.canvas.parentElement;
    if(parentElement) {
      parentElement.style.position = 'relative';
      this.stats.domElement.style.position = 'absolute';
      this.stats.showPanel(0);
    this.engineService.canvas.parentElement?.appendChild(this.stats.dom);
    this.renderSubscription = this.engineService.beforeRender$.subscribe(() => {
      this.stats.update();
    });
    }
  }

  @Input()
  public set thStats(enabled: boolean) {
    if(!enabled) {
      this.stats.domElement.style.visibility = 'hidden';
    } else {
      this.stats.domElement.style.visibility = 'visible';
    }
  }

}
