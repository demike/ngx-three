import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ThEffectComposer } from './generated/overrides/ThEffectComposer';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
    selector: 'th-abs-control',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThPassBase<T extends Pass = Pass, ARGS = unknown> extends ThWrapperBase<T, ARGS> implements OnInit {
  protected effectComposer? = inject(ThEffectComposer, { optional: true });


  public addToParent() {
    if (this._objRef && this.effectComposer && this.effectComposer.objRef) {
      this.effectComposer.objRef.addPass(this._objRef);
    }
  }

  public removeFromParent() {
    if (this._objRef && this.effectComposer && this.effectComposer.objRef) {
      this.effectComposer.objRef.removePass(this._objRef);
    }
  }
}
