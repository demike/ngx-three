import * as ts from 'typescript';
import { ParameterDeclaration } from 'typescript';
import { NgxThreeClass } from './NgxThreeClass';

/**
 * A wrapper class generator for three.js materials
 */
export class NgxThreeControl extends NgxThreeClass {
  public generate() {
    this.imports.add(`import { ThControlBase } from '../ThControlBase';`);
    super.generate();
  }

  protected getWrappedClassImportPath() {
    const fileName = this.classDecl.getSourceFile().fileName;
    return fileName
      .substr(fileName.indexOf('/node_modules/three/'))
      .replace('/node_modules/', '')
      .replace('.d.ts', '');
  }

  protected generateConstructor() {
    const argTypes = this.getConstructorArgumentTypes();

    if (argTypes.indexOf('HTMLElement') > 0) {
      this.imports.add('import { ThCanvas } from "../ThCanvas"');
      this.imports.add('import { ThCamera } from "./ThCamera"');
      this.imports.add('import { Host } from "@angular/core"');
      return `constructor(@Host() camera: ThCamera, public canvas: ThCanvas){
        super(camera);
      }

      protected createThreeInstance(args?: Iterable<any>) {
        if (!args) {
          args = [this.camera, this.canvas];
        }
        super.createThreeInstance(args);
      }
      `;
    }
    return '';
  }

  /*
  protected generateConstructor() {
    const argTypes = this.getConstructorArgumentTypes();

    if (argTypes.indexOf('HTMLElement') > 0) {
      this.imports.add('import { ThCanvas } from "../ThCanvas"');
      this.imports.add('import { ThCamera } from "./ThCamera"');
      this.imports.add('import { Host } from "@angular/core"');
      return `constructor(@Host() camera: ThCamera, public canvas: ThCanvas){
        super(camera);
      }

      protected createThreeInstance(args?: Iterable<any>) {
        if (!args) {
          args = [this.camera, this.canvas];
        }
        super.createThreeInstance(args);
      }
      `;
    }
    return '';
  }
  */

  protected getConstructorArgumentTypes(): string[] {
    const symbol = ((this.classDecl as unknown) as ts.Type).symbol;
    const constructorType = this.typeChecker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration
    );
    const constructSignatures = constructorType.getConstructSignatures();

    if (
      constructSignatures.length === 0 ||
      (constructSignatures.length === 1 &&
        constructSignatures[0].parameters.length === 0)
    ) {
      return [];
    }

    return constructSignatures[0].parameters.map((param) => {
      // tslint:disable-next-line: no-non-null-assertion
      return (param.declarations[0] as ParameterDeclaration).type!.getText();
    });
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
}
