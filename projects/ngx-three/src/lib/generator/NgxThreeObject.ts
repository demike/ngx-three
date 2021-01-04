import { NgxThreeClass } from './NgxThreeClass';

export class NgxThreeObject extends NgxThreeClass {
  protected generateConstructor() {
    if (this.className === 'ThObject3D') {
      return `
      constructor(@SkipSelf() parent: ThObject3D) {
        super(parent);
      }
      `;
    }

    return '';
  }

  protected generateProvidersArray() {
    return `[{provide: ThObject3D, useExisting: forwardRef(() => ${this.className})}]`;
  }

  generate() {
    if (this.className != 'ThObject3D') {
      this.imports.add("import { ThObject3D } from './ThObject3D';");
    }
    super.generate();
  }

  public getBaseClassName(): string {
    return 'Object3D';
  }

  public getWrapperBaseClassName(): string {
    return 'ThObjectBase';
  }
}
