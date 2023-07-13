export const GEN_OVERRIDES = ['RenderPass', 'EffectComposer', 'TransformControls', 'CSS2DObject', 'CSS3DObject'];

export function isOverriddenClass(className: string) {
  return GEN_OVERRIDES.indexOf(className) >= 0;
}
