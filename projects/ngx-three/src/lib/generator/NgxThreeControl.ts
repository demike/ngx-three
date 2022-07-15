import * as ts from 'typescript';
import { ParameterDeclaration } from 'typescript';
import { NgxThreeClass } from './NgxThreeClass';

/**
 * A wrapper class generator for three.js materials
 */
export class NgxThreeControl extends NgxThreeClass {
  public generate() {
    this.imports.add("import { ThControlBase } from '../ThControlBase';");
    super.generate();
  }

  protected generateConstructor() {
    return '';
  }

  protected getConstructorArgumentTypes(): string[] {
    const symbol = ((this.classDecl as unknown) as ts.Type).symbol;
    if(!symbol.valueDeclaration) {
      return [];
    }
    const constructorType = this.typeChecker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
    const constructSignatures = constructorType.getConstructSignatures();

    if (constructSignatures.length === 0 || (constructSignatures.length === 1 && constructSignatures[0].parameters.length === 0)) {
      return [];
    }

    return constructSignatures[0].parameters.map((param) =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (param.declarations![0] as ParameterDeclaration).type!.getText()
    );
  }

  protected generateProvidersArray() {
    return `[{provide: ThControlBase, useExisting: forwardRef(() => ${this.className})}]`;
  }

  public getBaseClassName(): string {
    return '';
  }

  public getWrapperBaseClassName(): string {
    return 'ThControlBase';
  }

  protected generateClassHeader() {
    // TransformControl is derived from object3d but we need the ThControlBase wrapper
    return super.generateClassHeader().replace('extends ThObject3D<Event,T,TARGS>', 'extends ThControlBase<T,TARGS>');
  }
}
