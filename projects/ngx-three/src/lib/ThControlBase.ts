import { ChangeDetectionStrategy, Component, inject, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Controls, EventDispatcher, Object3D } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThAnimationLoopService } from './renderer/th-animation-loop.service';
import { ThCanvas } from './ThCanvas';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-control',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThControlBase<
    TEventMap extends object = object,
    T extends Controls<TEventMap> = Controls<TEventMap>,
    TARGS = [],
  >
  extends ThWrapperBase<T, TARGS>
  implements OnDestroy
{
  protected _camera = inject<ThObject3D<any>>(ThObject3D);
  protected canvas? = inject(ThCanvas);
  protected renderLoop = inject(ThAnimationLoopService);

  protected origDispatchEventMethod?: EventDispatcher['dispatchEvent'];
  protected beforeRenderSubscription?: Subscription;

  @Input()
  public set domElement(value: HTMLElement) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  public get domElement(): HTMLElement | SVGElement | null | undefined {
    return this._objRef?.domElement;
  }

  @Input()
  public set object(value: Object3D) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  public get object(): Object3D | undefined {
    return this._objRef?.object;
  }
  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  public get enabled(): boolean | undefined {
    return this._objRef?.enabled;
  }

  public createThreeInstance(args?: Iterable<any>) {
    if (!args) {
      args = [this._camera.objRef, this.canvas?.elementRef.nativeElement];
    }
    const instance: Partial<EventDispatcher> = super.createThreeInstance(args);
    this.patchDispatchEvent(instance);
    this.subscribeControlUpdater(instance as any);
    return instance;
  }

  protected patchDispatchEvent(dispatcher: Partial<EventDispatcher>) {
    if (dispatcher.dispatchEvent) {
      this.origDispatchEventMethod = dispatcher.dispatchEvent;
      const origMethod = this.origDispatchEventMethod;
      dispatcher.dispatchEvent = (event) => {
        origMethod.call(dispatcher, event);
        // request an animation frame after an event was emitted;
        this.renderLoop.requestAnimationFrame();
      };
    }
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
    this.unpatchDispatchEvent();
    this.unsubscribeControlUpdater();
  }

  protected unpatchDispatchEvent() {
    if (this.origDispatchEventMethod && this._objRef) {
      (this._objRef as unknown as EventDispatcher).dispatchEvent = this.origDispatchEventMethod;
    }
  }

  protected subscribeControlUpdater(control: { update: (delta: number) => void }) {
    if (control.update !== undefined) {
      this.beforeRenderSubscription = this.renderLoop.beforeRender$.subscribe((state) => {
        control.update(state.delta);
      });
    }
  }

  protected unsubscribeControlUpdater() {
    if (this.beforeRenderSubscription) {
      this.beforeRenderSubscription.unsubscribe();
    }
  }
}
