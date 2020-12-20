import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  SimpleChanges,
  Type,
} from '@angular/core';
import { Object3D, Scene } from 'three';
import { ThObject3D } from './generated/ThObject3D';

@Component({
  selector: 'th-canvas',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) }],
})
export class ThCanvas {
  public static cnt = 0;
  constructor() {
    console.log('canvas ' + ThCanvas.cnt++);
  }

  public get obj() {
    return this;
  }

  /**
   * add a Scene
   * @param scene
   */
  add(scene: Object3D) {
    if (!(scene instanceof Scene)) {
      throw new Error('you need to add a scene');
    }
    console.log('got something');
  }

  /**
   * remove a Scene
   * @param scene
   */
  remove(scene: Object3D) {
    if (!(scene instanceof Scene)) {
      throw new Error('you need to remove a scene');
    }
  }
}
