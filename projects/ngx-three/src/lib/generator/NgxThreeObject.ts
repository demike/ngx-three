import { InterfaceType } from 'typescript';
import { NgxThreeClass } from './NgxThreeClass';

/**
 * An angular wrapper class generator for three.js Object3D based classes
 */
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
    if (this.wrappedClassName === this.getBaseClassName()) {
      return '[]';
    }

    let arr = `[{provide: ThObject3D, useExisting: forwardRef(() => ${this.className})}`;
    if (this.hasBaseClass('Camera', (this.classDecl as unknown) as InterfaceType)) {
      // also provide a camera
      this.imports.add("import { ThCamera } from './ThCamera';");
      arr += `,{provide: ThCamera, useExisting: forwardRef(() => ${this.className})}`;
    }

    arr += ']';

    return arr;
  }

  protected hasBaseClass(baseClass: string, type: InterfaceType): boolean {
    if (type.symbol.escapedName === baseClass) {
      // this class is the base class
      return false;
    }

    for (const baseType of this.typeChecker.getBaseTypes(type)) {
      if (baseType.getSymbol()?.escapedName === baseClass) {
        return true;
      }

      if (baseType.isClass() && this.hasBaseClass(baseClass, baseType)) {
        return true;
      }
    }
    return false;
  }

  public getBaseClassName(): string {
    return 'Object3D';
  }

  public getWrapperBaseClassName(): string {
    return 'ThObjectBase';
  }
}
