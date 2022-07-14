import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { RenderState, ThEngineService } from '../ThEngine.service';



@Injectable()
export class ThAnimationLoopService implements OnDestroy {

    private active = true;
    private frameId?: number;

    public readonly beforeRender$: Observable<RenderState>;
    private destroyed$ = new Subject<void>();

    constructor(private engineService: ThEngineService, private ngZone: NgZone) {
        this.beforeRender$ = this.engineService.beforeRender$;
        this.engineService.resize$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.requestAnimationFrame());
    }
    ngOnDestroy(): void {
        this.stop();
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    /**
     * start the loop
     */
    public start() {
        if(!this.active) {
            this.active = true;
            this.requestAnimationFrame();
        }
    }

    /**
     * stop the loop
     */
    public stop() {
        this.active = false;
        if (this.frameId !== undefined) {
            cancelAnimationFrame(this.frameId);
            this.frameId = undefined;
        }
    }

    /**
     *
     * @returns true if the render loop is active
     */
    public isActive() {
        return this.active;
    }

    /**
     * trigger an animation frame request
     */
    public requestAnimationFrame() {
        if (this.frameId === undefined) {
          this.ngZone.runOutsideAngular(
            () =>
              (this.frameId = requestAnimationFrame(() => {
                this.frameId = undefined;
                this.engineService.render();
                if(this.active) {
                    this.requestAnimationFrame();
                }
              }))
          );
        }
    }
}
