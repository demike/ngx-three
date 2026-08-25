import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { provideWebGPURenderer } from 'ngx-three';
import { BenchmarkSceneComponent } from './benchmark-scene.component';

/**
 * Wraps {@link BenchmarkSceneComponent} and provides a WebGPURenderer for it.
 * The provider lives on this (ancestor) component, so the inner `th-canvas`
 * picks up the WebGPU backend via its skipSelf RENDERER_PROVIDERS lookup while
 * the WebGL column reuses the very same scene component with the default backend.
 */
@Component({
  selector: 'app-benchmark-webgpu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BenchmarkSceneComponent],
  providers: [provideWebGPURenderer()],
  template: `<app-benchmark-scene label="WebGPU" [count]="count" />`,
})
export class BenchmarkWebgpuComponent {
  @Input() public count = 100;
}
