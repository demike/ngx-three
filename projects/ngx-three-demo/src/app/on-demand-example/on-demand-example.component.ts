import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ASSET_PATH } from '../assets';

@Component({
  selector: 'app-on-demand-example',
  templateUrl: './on-demand-example.component.html',
  styleUrls: ['./on-demand-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnDemandExampleComponent {
  protected controlType = 'orbit';
  protected renderOnDemand = true;
  protected selected = false;
  public readonly glbPath = `${ASSET_PATH}DamagedHelmet.glb`;
}
