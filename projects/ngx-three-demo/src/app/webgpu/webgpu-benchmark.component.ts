import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BenchmarkSceneComponent } from './benchmark-scene.component';
import { BenchmarkWebgpuComponent } from './benchmark-webgpu.component';

/**
 * Side-by-side WebGL vs WebGPU benchmark rendering the same GLB model many times.
 * Both viewports run on the same main thread, so absolute numbers are lower than
 * running a backend in isolation - use it to compare the two backends relative to
 * each other and to see how they scale as the draw-call count grows.
 */
@Component({
  selector: 'app-webgpu-benchmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BenchmarkSceneComponent, BenchmarkWebgpuComponent],
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }
      .controls {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        font-family: sans-serif;
        font-size: 14px;
      }
      .controls button {
        padding: 4px 12px;
        border: 1px solid #888;
        border-radius: 4px;
        background: #f5f5f5;
        cursor: pointer;
      }
      .controls button.active {
        background: #3f51b5;
        color: #fff;
        border-color: #3f51b5;
      }
      .hint {
        color: #777;
        margin-left: auto;
      }
      .row {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
      }
      .col {
        position: relative;
        flex: 1 1 0;
        min-width: 0;
        border: 1px solid #ddd;
      }
      @media (max-width: 720px) {
        .row {
          flex-direction: column;
        }
      }
    `,
  ],
  template: `
    <div class="controls">
      <span>Model copies:</span>
      @for (c of counts; track c) {
        <button [class.active]="count() === c" (click)="count.set(c)">{{ c }}</button>
      }
      <span class="hint">Both viewports share the main thread - compare them relative to each other.</span>
    </div>
    <div class="row">
      <div class="col">
        <app-benchmark-scene label="WebGL2 (default)" [count]="count()" />
      </div>
      <div class="col">
        <app-benchmark-webgpu [count]="count()" />
      </div>
    </div>
  `,
})
export class WebgpuBenchmarkComponent {
  public readonly counts = [50, 150, 350, 700];
  public readonly count = signal(150);
}
