import { ChangeDetectionStrategy, Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgxThreeModule, ThInstancedMesh } from 'ngx-three';
import { provideWebGPURenderer } from 'projects/ngx-three/src/lib/renderer/renderer-providers';
import * as THREE from 'three/webgpu';
import { float, positionView, positionWorld, triNoise3D, uniform, color, fog, normalWorld } from 'three/src/nodes/TSL';

@Component({
  selector: 'app-fog-example',
  template: ` <th-canvas #thecanvas>
    <th-scene [objRef]="webGPUScene">
      <th-perspectiveCamera #camera [args]="[45, aspect, near, far]" [position]="[30, 15, 30]">
        <th-orbitControls
          [autoRotate]="true"
          [target]="[0, 2, 0]"
          [minDistance]="7"
          [maxDistance]="100"
          [maxPolarAngle]="Math.PI / 2"
          [autoRotateSpeed]="0.1"
        />
      </th-perspectiveCamera>

      <th-instancedMesh
        #instancedMesh
        [args]="[undefined, undefined, NUM_INSTANCES]"
        [count]="NUM_INSTANCES"
        [castShadow]="true"
        [receiveShadow]="true"
      >
        <th-boxGeometry [args]="[1, 1, 1]" />
        <th-meshPhongNodeMaterial [colorNode]="this.buildWindows" />
      </th-instancedMesh>

      <th-hemisphereLight [args]="[$any(skyColor).value, $any(groundColor).value, 0.5]" />

      <th-mesh [scale]="[3, 3, 3]" [castShadow]="true" [receiveShadow]="true" [rotation]="[-Math.PI / 2, 0, 0]">
        <th-planeGeometry [args]="[200, 200]" />
        <th-meshPhongMaterial [color]="['0x999999']" />
      </th-mesh>
    </th-scene>
  </th-canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgxThreeModule],
  providers: [provideWebGPURenderer()],
})
export class FogExampleComponent implements AfterViewInit {
  readonly webGPUScene = new THREE.Scene();
  readonly Math = Math;
  readonly NUM_INSTANCES = 4000;
  readonly skyColor = color(0xf0f5f5);
  readonly groundColor = color(0xd0dee7);
  readonly aspect = window.innerWidth / window.innerHeight;
  readonly near = 1;
  readonly far = 600;
  private fogNoiseDistance = positionView.z.negate().smoothstep(0, this.far - 300);
  protected buildWindows = positionWorld.y
    .mul(10)
    .floor()
    .mod(4)
    .sign()
    .mix(color(0x000066).add(this.fogNoiseDistance), color(0xffffff));
  private backgroundNode = normalWorld.y.max(0).mix(this.groundColor, this.skyColor);
  private fogNode: ReturnType<typeof fog>;

  @ViewChild('instancedMesh', { static: true })
  protected instancedMesh?: ThInstancedMesh;

  constructor() {
    this.fogNode = this.initFogNode();
    this.webGPUScene.backgroundNode = this.backgroundNode;
    this.webGPUScene.fogNode = this.fogNode;
  }

  ngAfterViewInit() {
    this.initInstanceMatrix();
  }

  initInstanceMatrix() {
    const dummy = new THREE.Object3D();
    const center = new THREE.Vector3();
    const buildMesh = this.instancedMesh!.objRef!;

    for (let i = 0; i < buildMesh.count; i++) {
      const scaleY = Math.random() * 7 + 0.5;

      dummy.position.x = Math.random() * 600 - 300;
      dummy.position.z = Math.random() * 600 - 300;

      const distance = Math.max(dummy.position.distanceTo(center) * 0.012, 1);

      dummy.position.y = 0.5 * scaleY * distance;

      dummy.scale.x = dummy.scale.z = Math.random() * 3 + 0.5;
      dummy.scale.y = scaleY * distance;

      dummy.updateMatrix();

      buildMesh.setMatrixAt(i, dummy.matrix);
    }
    // buildMesh.instanceMatrix.needsUpdate = true;
  }

  private initFogNode() {
    const distance = this.fogNoiseDistance.mul(20).max(4);
    const alpha = 0.98;
    const groundFogArea = float(distance).sub(positionWorld.y).div(distance).pow(3).saturate().mul(alpha);

    // an alternative way to create a TimerNode
    const timer = uniform(0).onFrameUpdate((frame) => frame.time);

    const fogNoiseA = triNoise3D(positionWorld.mul(0.005), 0.2, timer);
    const fogNoiseB = triNoise3D(positionWorld.mul(0.01), 0.2, timer.mul(1.2));

    const fogNoise = fogNoiseA.add(fogNoiseB).mul(this.groundColor);

    return fog(this.fogNoiseDistance.oneMinus().mix(this.groundColor, fogNoise), groundFogArea);
  }
}
