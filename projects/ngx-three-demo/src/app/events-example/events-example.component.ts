import { ChangeDetectionStrategy, ChangeDetectorRef, Component, SimpleChanges } from '@angular/core';
import { ASSET_PATH } from '../assets';
@Component({
  selector: 'app-events-example',
  templateUrl: './events-example.component.html',
  styleUrls: ['./events-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EventsExampleComponent {
  public readonly id = 'CID';
  public changes: string[] = [];
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public position: [x: number, y: number, z: number] = [0, 1, 0];
  public readonly assetPath = `${ASSET_PATH}DamagedHelmet.glb`;
  constructor(private cdref: ChangeDetectorRef) {
    window.setInterval(() => {
      this.rotation = [0, this.rotation[1] + 0.05, 0];
      this.cdref.markForCheck();
    }, 1500);

    window.setInterval(() => {
      this.position = [0, (this.position[1] + 1) % 5, 0];
      this.cdref.markForCheck();
    }, 3000);
  }

  public logUpdates(changes: SimpleChanges) {
    this.pushToChangesArray(Object.keys(changes).toString());
  }

  public onLoaded() {
    this.changes.push('Model loaded');
  }

  public onOrbitControlChange() {
    this.pushToChangesArray(`${this.id}: orbit control change`);
  }

  public onOrbitControlEnd = () => { // <-- preserves binding scope when used in template
    this.pushToChangesArray(`${this.id}: orbit control end`);
  };

  private pushToChangesArray(change: string) {
    if (this.changes.length >= 20) {
      this.changes.shift();
    }
    this.changes.push(change);
  }
}
