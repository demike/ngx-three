import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ThObject3D } from 'ngx-three';
import { Color, Euler, Light, Vector3 } from 'three';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';

@Component({
  selector: 'app-post-processing-example',
  templateUrl: './post-processing-example.component.html',
  styleUrls: ['./post-processing-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostProcessingExampleComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public readonly DotScreenShader = DotScreenShader;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public readonly RGBShiftShader = RGBShiftShader;

  public shiftAmount = 0.0015;

  @ViewChild('object', { static: true })
  public object?: ThObject3D;
  @ViewChild('light', { static: true })
  public light?: Light;
  public readonly zDist = 400;
  public meshData: { pos: Vector3; rotation: Euler; scale: Vector3; color: Color }[] = [];

  constructor() {
    this.initMeshData();
  }
  ngOnInit(): void {
    this.light?.position?.set(1, 1, 1);
  }

  private initMeshData() {
    for (let i = 0; i < 100; i++) {
      const scale = Math.random() * 50;
      this.meshData.push({
        pos: new Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
          .normalize()
          .multiplyScalar(Math.random() * this.zDist),
        rotation: new Euler(Math.random() * 2, Math.random() * 2, Math.random() * 2),
        scale: new Vector3(scale, scale, scale),
        color: new Color(0xffffff * Math.random()),
      });
    }
  }

  animate() {
    if (this.object?.objRef?.rotation) {
      this.object.objRef.rotation.x += 0.005;
      this.object.objRef.rotation.y += 0.01;
    }
  }
}
