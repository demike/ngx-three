import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ASSET_PATH } from '../assets';

@Component({
  selector: 'app-controls-example',
  templateUrl: './controls-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsExampleComponent implements OnInit {
  public selected = false;
  public readonly glbPath = `${ASSET_PATH}DamagedHelmet.glb`;
  ngOnInit(): void {}
}
