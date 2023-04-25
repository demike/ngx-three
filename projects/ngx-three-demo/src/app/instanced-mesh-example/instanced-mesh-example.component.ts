/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectionStrategy, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Object3D } from 'three';
import SimplexNoise from 'simplex-noise';
import { ThCanvas, ThInstancedMesh, ThPointLight } from 'ngx-three';

@Component({
  selector: 'app-instanced-mesh-example',
  templateUrl: './instanced-mesh-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstancedMeshExampleComponent implements OnInit {
  readonly SIZE = 1.5;
  readonly NX = 20;
  readonly NY = 20;
  readonly PADDING = 1;
  readonly SIZEP = this.SIZE + this.PADDING;
  readonly W = this.NX * this.SIZEP - this.PADDING;
  readonly H = this.NY * this.SIZEP - this.PADDING;
  readonly NUM_INSTANCES = this.NX * this.NY;

  public dummy = new Object3D();
  public simplex = new SimplexNoise();
  public pointerPN = { x: 0, y: 0 };

  @ViewChild('canvas')
  public canvas?: ThCanvas;

  @ViewChild('light')
  public light?: ThPointLight;

  @ViewChild('instancedMesh')
  public instancedMesh?: ThInstancedMesh;

  constructor() {}

  ngOnInit(): void {}

  onRender() {
    this.updateLightPosition();
    this.updateInstanceMatrix();
  }

  updateLightPosition() {
    const pos = this.light?.position;
    if (pos) {
      pos.x = this.pointerPN.x * this.W;
      pos.y = this.pointerPN.y * this.H;
    }
  }

  updateInstanceMatrix() {
    if (!this.instancedMesh || !this.instancedMesh.objRef) {
      return;
    }
    const x0 = -this.W / 2 + this.PADDING;
    const y0 = -this.H / 2 + this.PADDING;
    const time = Date.now() * 0.0001;
    const mx = this.pointerPN.x * 0.1;
    const my = this.pointerPN.y * 0.1;
    const noise = 0.005;
    let x;
    let y;
    let nx;
    let ny;
    let rx;
    let ry;
    for (let i = 0; i < this.NX; i++) {
      for (let j = 0; j < this.NY; j++) {
        x = x0 + i * this.SIZEP;
        y = y0 + j * this.SIZEP;
        nx = x * noise + mx;
        ny = y * noise + my;
        rx = this.simplex.noise3D(nx, ny, time) * Math.PI;
        ry = this.simplex.noise3D(ny, nx, time) * Math.PI;
        this.dummy.position.set(x, y, -10);
        this.dummy.rotation.set(rx, ry, 0);
        this.dummy.updateMatrix();
        this.instancedMesh?.objRef?.setMatrixAt(i * this.NY + j, this.dummy.matrix);
      }
    }
    this.instancedMesh.objRef.instanceMatrix.needsUpdate = true;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: PointerEvent) {
    if (!this.canvas || !this.canvas.rendererCanvas) {
      return;
    }
    const el = this.canvas.rendererCanvas.nativeElement;
    this.pointerPN.x = ((event.clientX - el.offsetLeft + window.scrollX) / el.width) * 2 - 1; //this.W;
    this.pointerPN.y = -((event.clientY - el.offsetTop + window.scrollY) / el.height) * 2 + 1; //this.H;
  }
}
