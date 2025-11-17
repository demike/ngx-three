import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lod-example',
  templateUrl: './lod-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LODExampleComponent {
  trees: [x: number, y: number, z: number][] = [
    [2, 0, -10],
    [0, 0, -8],
    [2, 0, -6],
    [4, 0, -4],
    [2, 0, -2],
    [0, 0, 0],
    [2, 0, 2],
    [4, 0, 4],
    [2, 0, 6],
    [0, 0, 8],
    [2, 0, 10],
  ];
}
