export const GEN_OVERRIDES = ['RenderPass'];

export function isOverriddenClass(className: string) {
  return GEN_OVERRIDES.indexOf(className) >= 0;
}
