import { Directive, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ThEngineService } from '../ThEngine.service';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { Subscription } from 'rxjs';
import { ThCanvas } from '../ThCanvas';

@Directive({
    selector: '[thStats]',
    standalone: false
})
export class StatsDirective implements OnInit, OnDestroy {
  private engineService = inject(ThEngineService);
  private canvas = inject(ThCanvas);

  private stats: Stats;
  private renderSubscription?: Subscription;
  constructor() {
    this.stats = new Stats();
  }
  ngOnDestroy(): void {
    if (this.renderSubscription) {
      this.renderSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    if (!this.canvas.elementRef) {
      throw new Error('No canvas present');
    }

    const parentElement = this.canvas.elementRef.nativeElement;
    if (parentElement) {
      parentElement.style.position = 'relative';
      this.stats.dom.style.position = 'absolute';
      this.stats.showPanel(0);
      parentElement.appendChild(this.stats.dom);
      this.renderSubscription = this.engineService.beforeRender$.subscribe(() => {
        this.stats.update();
      });
    }
  }

  @Input()
  public set thStats(enabled: boolean) {
    if (!enabled) {
      this.stats.dom.style.visibility = 'hidden';
    } else {
      this.stats.dom.style.visibility = 'visible';
    }
  }
}
