import { Component, inject, OnDestroy } from '@angular/core';
import { EventDispatcher } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThAnimationLoopService } from './renderer/th-animation-loop.service';
import { ThCanvas } from './ThCanvas';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-control',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThControlBase<T, ARGS> extends ThWrapperBase<T, ARGS> implements OnDestroy {

  protected origDispatchEventMethod?: (event: any) => void;
  protected renderLoop =  inject(ThAnimationLoopService);

  constructor(protected camera: ThObject3D<any>, protected canvas?: ThCanvas, ) {
    super();
  }

  public createThreeInstance(args?: Iterable<any>) {
    if (!args) {
      args = [this.camera.objRef, this.canvas?.rendererCanvas?.nativeElement];
    }
    const instance: Partial<EventDispatcher> = super.createThreeInstance(args);
    this.patchDispatchEvent(instance);
    return instance;
  }

  protected patchDispatchEvent(dispatcher: Partial<EventDispatcher>) {
    if(dispatcher.dispatchEvent) {
      const origMethod = this.origDispatchEventMethod = dispatcher.dispatchEvent;
      dispatcher.dispatchEvent = (event: any) => {
        origMethod.apply(dispatcher, event);
        // request an animation frame after an event was emitted;
        this.renderLoop.requestAnimationFrame();
      };
    }
  }

  public ngOnDestroy(): void {
      super.ngOnDestroy();
      this.unpatchDispatchEvent();
  }

  protected unpatchDispatchEvent() {
    if(this.origDispatchEventMethod && this._objRef) {
      (this._objRef as unknown as EventDispatcher).dispatchEvent = this.origDispatchEventMethod;
    }
  }
}
