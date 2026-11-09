# Changelog

## [Unreleased]

### Performance
 - `onRender` of all views is emitted within a single `ngZone.run` per frame (was one per view), and not at all if nobody listens
 - `<th-html>` uses the new `ThView.beforeViewRender$` hook instead of `onRender`, so it no longer causes a change detection cycle per frame in zone based apps
 - `<th-html>` caches the canvas size instead of calling `getBoundingClientRect()` every frame
 - raycaster events: pointer listeners are registered outside the Angular zone, `pointermove` is raycast at most once per animation frame, and `pointerup` / `click` share one raycast
 - `ThView.clearColor` is parsed once instead of every frame

### Features
 - `injectBeforeRender(callback)`: per-frame callback that does not trigger change detection
 - `ThView.beforeViewRender$`: emits right before a view is rendered

### Fixes
 - `[shadow]="false"` enabled shadows
 - `<th-html>` was never removed from the scene graph on destroy
 - `<th-html>` `onOcclude` never emitted
 - `LazyObject3dProxy.remove` dropped all children except the removed one

### Breaking Changes
 - the default WebGL renderer no longer sets `preserveDrawingBuffer: true`. If you read back the canvas (i.e. `toDataURL()`), use `*rendererParameters="{ preserveDrawingBuffer: true }"` or `provideWebGLRenderer({ preserveDrawingBuffer: true })`
 - `[shadow]="false"` now disables the renderer's shadow map (it enabled it before)
 - `<th-html>`: if `(onOcclude)` is bound, the element's visibility is no longer toggled automatically (as in drei)
 - `ThView.clearColor` getter returns a `THREE.Color`

## [0.28]

### Features
 - allow useage of multiple renderers
 - renderers can be provided and injected
 - CSS3D renderer example
 - WebGL + CSS3D renderer example
 - Html renderering (with occlusion) with CSS3D renderer example 

### Breaking Changes 
 - if you have used `[rendererParameters]="..."` on the ThCanvas you have to change this to a structural diretive `*rendererParameters="..."` 
 - ThEngine service has changed, and does not expose a renderer member but "renderers"