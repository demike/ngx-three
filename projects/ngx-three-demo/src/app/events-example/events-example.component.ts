import { Component, OnInit, SimpleChanges } from '@angular/core';
import { SimpleExampleComponent } from '../simple-example/simple-example.component';

@Component({
  selector: 'app-events-example',
  templateUrl: './events-example.component.html',
  styleUrls: ['./events-example.component.scss'],
})
export class EventsExampleComponent {
  public changes: string[] = [];
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public position: [x: number, y: number, z: number] = [0, 1, 0];
  constructor() {
    window.setInterval(() => {
      this.rotation = [0, this.rotation[1] + 0.05, 0];
    }, 1500);

    window.setInterval(() => {
      this.position = [0, (this.position[1] + 1) % 5, 0];
    }, 3000);
  }

  public logUpdates(changes: SimpleChanges) {
    if (this.changes.length >= 20) {
      this.changes.shift();
    }
    this.changes.push(JSON.stringify(changes));
  }

  public onLoaded() {
    this.changes.push('Model loaded');
  }
}
