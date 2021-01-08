import { NgxThreeClass } from './NgxThreeClass';

/**
 * A wrapper class generator for three.js materials
 */
export class NgxThreeGeometry extends NgxThreeClass {
  public generate() {
    this.imports.add(`import { ThObject3D } from './ThObject3D';`);
    if (this.className !== 'ThGeometry') {
      this.imports.add(`import { ThGeometry } from './ThGeometry';`);
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
    if (this.className === 'ThGeometry') {
      return '[]';
    }
    return `[{provide: ThGeometry, useExisting: forwardRef(() => ${this.className})}]`;
  }

  public getBaseClassName(): string {
    return 'Geometry';
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
