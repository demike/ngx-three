import { assertInInjectionContext, DestroyRef, inject, Injector, runInInjectionContext } from '@angular/core';
import { Subscription } from 'rxjs';
import { RenderState, ThEngineService } from '../ThEngine.service';

/**
 * Registers a callback that runs once per frame, right before rendering.
 *
 * In contrast to binding the `(beforeRender)` / `(onRender)` outputs in a template, the callback
 * does **not** trigger change detection, which makes it the cheaper choice for imperative
 * per-frame work, i.e. animating three.js objects directly:
 *
 * ```ts
 * export class SpinningBox {
 *   box = viewChild.required(ThMesh);
 *   constructor() {
 *     injectBeforeRender(({ delta }) => {
 *       this.box().objRef?.rotateY(delta);
 *     });
 *   }
 * }
 * ```
 *
 * Template bindings are not updated by this callback; mark the component for check yourself
 * if the callback changes state that a template displays.
 *
 * Must be called in an injection context below a `th-canvas` (i.e. in a constructor or field initializer),
 * or with an explicit `injector`. The subscription ends automatically when the injection context is destroyed.
 *
 * @param callback called with the current render state (engine and delta time in seconds)
 * @param options.injector optional injector to use outside of an injection context
 * @returns the subscription, in case you want to stop earlier
 */
export function injectBeforeRender(
  callback: (state: RenderState) => void,
  options?: { injector?: Injector },
): Subscription {
  if (!options?.injector) {
    assertInInjectionContext(injectBeforeRender);
  }
  const injector = options?.injector ?? inject(Injector);
  return runInInjectionContext(injector, () => {
    const subscription = inject(ThEngineService).beforeRender$.subscribe(callback);
    inject(DestroyRef).onDestroy(() => subscription.unsubscribe());
    return subscription;
  });
}
