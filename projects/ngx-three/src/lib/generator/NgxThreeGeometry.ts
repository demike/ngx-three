import { NgxThreeClass } from './NgxThreeClass';

/**
 * A wrapper class generator for three.js materials
 */
export class NgxThreeGeometry extends NgxThreeClass {
  public generate() {
    this.imports.add("import { ThObject3D } from './ThObject3D';");
    if (this.className !== 'ThBufferGeometry') {
      this.imports.add("import { ThBufferGeometry } from './ThBufferGeometry';");
    }
    super.generate();
  }

  protected generateConstructor() {
    if (this.className === 'Th' + this.getBaseClassName()) {
      return `
      constructor(@SkipSelf() hostObject: ThObject3D) {
        super(hostObject);
      }
      `;
    }

    return '';
  }

  protected generateProvidersArray() {
    if (this.className === 'ThBufferGeometry') {
      return '[]';
    }
    return `[{provide: ThBufferGeometry, useExisting: forwardRef(() => ${this.className})}]`;
  }

  public getBaseClassName(): string {
    return 'BufferGeometry';
  }

  public getWrapperBaseClassName(): string {
    return 'ThGeometryBase';
  }
}

export class NgxThreeBufferGeometry extends NgxThreeGeometry {
  public getBaseClassName(): string {
    return 'BufferGeometry';
  }
}
