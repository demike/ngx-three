import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-controls-example',
  templateUrl: './controls-example.component.html',
  styleUrls: ['./controls-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsExampleComponent implements OnInit {
  public selected = false;
  constructor() {}

  ngOnInit(): void {}
}
