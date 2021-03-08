import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-controls-example',
  templateUrl: './controls-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsExampleComponent implements OnInit {
  public selected = false;

  ngOnInit(): void {}
}
