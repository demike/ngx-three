import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ThGridHelper } from 'ngx-three';
import { Material } from 'three';

@Component({
    selector: 'app-animation-example',
    templateUrl: './animation-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AnimationExampleComponent implements AfterViewInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public readonly Math = Math;

  @ViewChild('gridHelper', { static: true })
  public gridHelper?: ThGridHelper;

  constructor() {}

  ngAfterViewInit(): void {
    const material = this.gridHelper?.objRef?.material as Material | undefined;
    if (material) {
      material.opacity = 0.2;
      material.transparent = true;
    }
  }

  public onBeforeRender() {
    // TODO: implement me
  }
}
