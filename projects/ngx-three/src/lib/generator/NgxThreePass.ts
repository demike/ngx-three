import * as ts from 'typescript';
import { NgxThreeClass } from './NgxThreeClass';

/**
 * A wrapper class generator for three.js materials
 */
export class NgxThreePass extends NgxThreeClass {
  public generate() {
    this.imports.add("import { ThPassBase } from '../ThPassBase';");
    this.imports.add("import { ThWrapperBase } from '../ThWrapperBase';");
    super.generate();
    this.content = `/* eslint-disable @typescript-eslint/ban-types */ ${this.content}`;
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
    if (this.wrappedClassName === 'EffectComposer') {
      return '[]';
    }
    return `[{provide: ThPassBase, useExisting: forwardRef(() => ${this.className})}]`;
  }

  public getBaseClassName(): string {
    return '';
  }

  public getWrapperBaseClassName(): string {
    if (this.wrappedClassName === 'EffectComposer') {
      return 'ThWrapperBase';
    }
    return 'ThPassBase';
  }

  protected generateSetterInput(memberName: string, member: ts.PropertyDeclaration, memberType: ts.Type) {
    if (memberName === 'uniforms') {
      return `
        @Input()
        public set uniforms(map:  { [name: string]: { value: any } }) {
          if(this._objRef) {
            Object.assign(this._objRef.uniforms, map);
          }
        }
      `;
    }
    return super.generateSetterInput(memberName, member, memberType);
  }
}
