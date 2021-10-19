import { NgxThreeClass } from './NgxThreeClass';

/**
 * A wrapper class generator for three.js materials
 */
export class NgxThreePass extends NgxThreeClass {
  public generate() {
    this.imports.add("import { ThPassBase } from '../ThPassBase';");
    super.generate();
    this.content = `/* eslint-disable @typescript-eslint/ban-types */ ${this.content}`;
  }

  public getWrappedClassImportPath() {
    return this.getImportPathForSourceFile(this.classDecl.getSourceFile());
  }

  protected generateConstructor() {
    return '';
  }

  /*
  protected getConstructorArgumentTypes(): string[] {
    const symbol = ((this.classDecl as unknown) as ts.Type).symbol;
    const constructorType = this.typeChecker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
    const constructSignatures = constructorType.getConstructSignatures();

    if (constructSignatures.length === 0 || (constructSignatures.length === 1 && constructSignatures[0].parameters.length === 0)) {
      return [];
    }

    return constructSignatures[0].parameters.map((param) =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (param.declarations[0] as ParameterDeclaration).type!.getText()
    );
  }
  */

  protected generateProvidersArray() {
    return `[{provide: ThPassBase, useExisting: forwardRef(() => ${this.className})}]`;
  }

  public getBaseClassName(): string {
    return '';
  }

  public getWrapperBaseClassName(): string {
    return 'ThPassBase';
  }
}
