import { NgxThreeClass } from './NgxThreeClass';

/**
 * A wrapper class generator for three.js materials
 */
export class NgxThreeLoader extends NgxThreeClass {
  public generate() {
    this.imports.add(`import { ThObject3D } from './ThObject3D';`);
    super.generate();
  }

  protected generateConstructor() {
    if (this.className === 'ThLoader') {
      return `
      constructor(@SkipSelf() hostObject: ThObject3D) {
        super(hostObject);
      }
      `;
    }

    return '';
  }

  protected generateProvidersArray() {
    return `[{provide: ThLoader, useExisting: forwardRef(() => ${this.className})}]`;
  }

  public getBaseClassName(): string {
    return 'Loader';
  }

  public getWrapperBaseClassName(): string {
    return 'ThLoaderBase';
  }
}
