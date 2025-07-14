import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RenderState } from 'ngx-three';
import { AnimationAction, AnimationMixer, LoopOnce, Mesh } from 'three';

import { ASSET_PATH } from '../assets';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class RobotComponent {
  public readonly assetPath = ASSET_PATH + 'RobotExpressive.glb';

  public readonly states = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing'];
  public readonly emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];

  animationMixer?: AnimationMixer;

  actions: Record<string, AnimationAction> = {};
  activeAction?: AnimationAction;
  previousAction?: AnimationAction;

  constructor() {}

  onInit(gltf: GLTF) {
    this.animationMixer = new AnimationMixer(gltf.scene);

    gltf.scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    for (const animation of gltf.animations) {
      const action = this.animationMixer.clipAction(animation);
      this.actions[animation.name] = action;

      if (this.emotes.indexOf(animation.name) >= 0 || this.states.indexOf(animation.name) >= 4) {
        action.clampWhenFinished = true;
        action.loop = LoopOnce;
      }
    }

    this.activeAction = this.actions.Walking;
    this.activeAction.play();
  }

  beforeRender(state: RenderState) {
    if (this.animationMixer) {
      this.animationMixer.update(state.delta);
    }
  }

  fadeToAction(state: string, duration: number) {
    this.previousAction = this.activeAction;
    this.activeAction = this.actions[state];

    if (this.previousAction && this.previousAction !== this.activeAction) {
      this.previousAction.fadeOut(duration);
    }

    this.activeAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(duration).play();
  }
}
