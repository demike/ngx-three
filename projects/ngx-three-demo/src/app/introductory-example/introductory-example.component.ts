/* eslint-disable @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
    <th-mesh
      [rotation]="rotation"
      [position]="position"
      (onClick)="selected = !selected"
      [scale]="selected ? [2, 2, 2] : [1, 1, 1]"
    >
      <th-boxGeometry/>
      <th-meshBasicMaterial [args]="{color: 'purple'}"/>
  </th-mesh>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Box {
  public selected = false;

  @Input()
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  @Input()
  public position: [x: number, y: number, z: number] = [0, 0, 0];
}

@Component({
  selector: 'app-introductory-example',
  template: `
    <th-canvas (onRender)="this.onBeforeRender()">
      <th-scene>
        <app-box [position]="[-2,0,0]" [rotation]="rotation"/>
        <app-box [position]="[2,0,0]" [rotation]="rotation"/>
        <th-ambientLight/>
        <th-perspectiveCamera [args]="[75, 2, 0.1, 1000]" [position]="[1,1,5]"/>
      </th-scene>
    </th-canvas>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductoryExampleComponent {
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public onBeforeRender() {
    this.rotation = [0, this.rotation[2] + 0.01, this.rotation[2] + 0.01];
  }
}
