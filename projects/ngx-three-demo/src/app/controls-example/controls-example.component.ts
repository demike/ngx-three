import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ASSET_PATH } from '../assets';
import { NgxThreeModule } from 'ngx-three';

@Component({
  selector: 'app-controls-example',
  templateUrl: './controls-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgxThreeModule],
})
export class ControlsExampleComponent {
  public selected = false;
  public readonly glbPath = `${ASSET_PATH}DamagedHelmet.glb`;
}
