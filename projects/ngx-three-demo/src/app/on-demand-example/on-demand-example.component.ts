import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ASSET_PATH } from '../assets';
import { TransformControlsMode } from 'three/examples/jsm/controls/TransformControls';

@Component({
  selector: 'app-on-demand-example',
  templateUrl: './on-demand-example.component.html',
  styleUrls: ['./on-demand-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnDemandExampleComponent {
  protected controlType = 'transform';
  protected renderOnDemand = true;
  protected selected = false;
  protected mode: TransformControlsMode = 'translate';
  public readonly glbPath = `${ASSET_PATH}DamagedHelmet.glb`;

  public changeMode() {
    if (this.mode === 'translate') {
      this.mode = 'rotate';
    } else if (this.mode === 'rotate') {
      this.mode = 'translate';
    }
  }
}
