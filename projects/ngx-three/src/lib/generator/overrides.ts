export const GEN_OVERRIDES = ['RenderPass', 'EffectComposer'];

export function isOverriddenClass(className: string) {
  return GEN_OVERRIDES.indexOf(className) >= 0;
}
