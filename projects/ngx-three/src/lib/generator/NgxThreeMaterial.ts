import { NgxThreeClass } from './NgxThreeClass';

/**
 * A wrapper class generator for three.js materials
 */
export class NgxThreeMaterial extends NgxThreeClass {
  public generate() {
    this.imports.add("import { ThObject3D } from './ThObject3D';");
    super.generate();
  }

  protected generateParentInjector() {
    if (this.className === 'ThMaterial') {
      return `
      parent = inject<ThObject3D>(ThObject3D, { skipSelf: true });
      `;
    }

    return '';
  }

  protected generateProvidersArray() {
    if (this.wrappedClassName === this.getBaseClassName()) {
      return '[]';
    }
    return `[{provide: ThMaterial, useExisting: forwardRef(() => ${this.className})}]`;
  }

  public getBaseClassName(): string {
    return 'Material';
  }

  public getWrapperBaseClassName(): string {
    return 'ThMaterialBase';
  }
}
