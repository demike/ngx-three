import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DRACOLoaderService } from 'ngx-three';
import * as THREE from 'three';
import { Clock, Plane, Vector3 } from 'three';
import { ASSET_PATH } from '../assets';

/**
 * An example showing
 * - how to use the refById directive.
 * - using draco compression
 * - using the shader material
 * It selects the screen of the notebook by id and applies a shader material to it.
 * By clicking on the notebook you can change the fragment shader.
 */
@Component({
    selector: 'app-ref-by-id-example',
    templateUrl: './ref-by-id-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class RefByIdExampleComponent {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public readonly Math = Math;
  public selected = false;
  public readonly glbPath = `${ASSET_PATH}mac-draco.glb`;
  public readonly clock = new Clock(true);

  public readonly plane = new Plane(new Vector3(0, 1, 0), 3);

  public rotation: [number, number, number] = [0, 0, 0];
  public position: [number, number, number] = [0, 0, 0];

  constructor() {
    const dracoLoader = inject(DRACOLoaderService);

    // specify the draco decoder path used by the gltf loader instances
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/libs/draco/gltf/');
    // in this case we need to disable cors (should not be necessary if you host the decoder yourself)
    dracoLoader.setCrossOrigin('no-cors');

    this.calcPose();
  }

  onBeforeRender(): void {
    this.calcPose();
    this.calcUniforms();
  }

  protected calcPose() {
    const t = this.clock.getElapsedTime();
    this.rotation = [
      THREE.MathUtils.lerp(this.rotation[0], Math.cos(t / 2) / 20 + 0.25, 0.1),
      THREE.MathUtils.lerp(this.rotation[1], Math.sin(t / 4) / 20, 0.1),
      THREE.MathUtils.lerp(this.rotation[2], Math.sin(t / 8) / 20, 0.1)
    ];

    this.position = [0, THREE.MathUtils.lerp(this.position[1], (-2 + Math.sin(t / 2)) / 2, 0.1), 0];
  }

  protected calcUniforms() {
    this.uniforms.time.value = 1 + this.clock.getElapsedTime() * 5;
  }

  public uniforms = { time: { value: 1.0 } };

  public readonly fragmentShader1 = `
uniform float time;
varying vec2 vUv;

void main( void ) {
  vec2 position = - 1.0 + 2.0 * vUv;

  float red = abs( sin( position.x * position.y + time / 5.0 ) );
  float green = abs( sin( position.x * position.y + time / 4.0 ) );
  float blue = abs( sin( position.x * position.y + time / 3.0 ) );
  gl_FragColor = vec4( red, green, blue, 1.0 );

}
`;

  public readonly fragmentShader2 = `
  uniform float time;
  varying vec2 vUv;

  void main( void ) {
    vec2 position = vUv;
    float color = 0.0;
    color += sin( position.x * cos( time / 15.0 ) * 80.0 ) + cos( position.y * cos( time / 15.0 ) * 10.0 );
    color += sin( position.y * sin( time / 10.0 ) * 40.0 ) + cos( position.x * sin( time / 25.0 ) * 40.0 );
    color += sin( position.x * sin( time / 5.0 ) * 10.0 ) + sin( position.y * sin( time / 35.0 ) * 80.0 );
    color *= sin( time / 10.0 ) * 0.5;
    gl_FragColor = vec4( vec3( color, color * 0.5, sin( color + time / 3.0 ) * 0.75 ), 1.0 );
  }
  `;

  public readonly vertexShader = `varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
  }
  `;
}
