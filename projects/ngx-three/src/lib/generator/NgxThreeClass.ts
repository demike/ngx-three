import * as prettier from 'prettier';
import * as ts from 'typescript';

const pascalToCamelCase = (s: string) => `${s[0].toLowerCase()}${s.slice(1)}`;

export class NgxThreeClass {
  public content: string;
  public readonly className: string;
  private classDecl: ts.ClassDeclaration;
  public readonly baseClassName: string;
  private imports: string[] = [];

  constructor(
    private classSymbol: ts.Symbol,
    private typeChecker: ts.TypeChecker
  ) {
    this.classDecl = this.classSymbol.declarations[0] as ts.ClassDeclaration;
    this.baseClassName = this.classSymbol.escapedName as string;

    this.className = 'Th' + this.baseClassName;
    this.content = '';
  }

  generate() {
    const inputs = this.generateInputs(this.classDecl);
    const directiveName = 'th-' + pascalToCamelCase(this.baseClassName);

    if (inputs.members.length > 0) {
      this.imports.push("import { Input } from '@angular/core';");
    }
    this.imports.push(
      "import { SkipSelf, Self, forwardRef } from '@angular/core';"
    );
    const constr = this.generateConstructor(this.classDecl);
    this.generateBaseClassImports();

    const ngxClassDeclarationString = `
        import { ${this.baseClassName} } from 'three';
        import { Component } from '@angular/core';
        import { ThObject3D } from './ThObject3D';
        import { ThArgs } from '../ThArgs';
        ${this.imports.join('')}
    
        @Component({
          selector: "${directiveName}",
          inputs: ${inputs.inputNames},
          template: "",
          providers: [{provide: ThObject3D, useExisting: forwardRef(() => ${
            this.className
          })}]
        })
        ${this.generateClassHeader()} {
          ${inputs.members}
          ${constr}
        }
        `;

    this.content = ngxClassDeclarationString;

    try {
      /*
      const languageService = ts.createLanguageService(
        new ServiceHost(__filename, this.content)
      );
      */
      this.content = prettier.format(ngxClassDeclarationString, {
        parser: 'babel-ts',
      });
    } catch (e) {
      console.log(e);
    }
  }

  private generateClassHeader() {
    let header = '';
    if (!this.classDecl.typeParameters) {
      return `export class ${this.className} extends ${this.baseClassName}`;
    }

    return `export class ${
      this.className
    }<${this.classDecl.typeParameters
      .map((param) => param.getText())
      .join(',')}> extends ${
      this.baseClassName
    }<${this.classDecl.typeParameters
      .map((param) => param.name.escapedText)
      .join(',')}>`;

    return header;
  }

  private generateInputs(
    classDeclaration: ts.ClassDeclaration
  ): { members: string; inputNames: string } {
    let inputNames: string = '[';
    let members = '';
    for (let member of classDeclaration.members) {
      switch (member.kind) {
        case ts.SyntaxKind.PropertyDeclaration:
          const type = this.typeChecker!.getTypeAtLocation(member);
          const setterProperty = type.getProperty('set');
          // create a special property
          if (setterProperty /*&& ts.isMethodDeclaration(setterProperty)*/) {
            console.log('got setter');
            members += this.generateSetterInput(
              (member.name as ts.Identifier).escapedText as string,
              type
            );
          } else {
            // just creat the default input property
            inputNames += `"${
              (member.name as ts.Identifier).escapedText as string
            }",`;
          }
          break;
        case ts.SyntaxKind.Constructor:
          break;
        default:
          break;
      }
    }
    inputNames += ']';
    return { members, inputNames };
  }

  private generateSetterInput(memberName: string, memberType: ts.Type) {
    let str = `
      @Input("${memberName}")
      public set __${memberName}( test: any ) {
        this.${memberName} = test;
      }
      `;
    return str;
  }

  private generateConstructor(classDeclaration: ts.ClassDeclaration) {
    classDeclaration;
    console.log(classDeclaration.getSourceFile());

    console.log(this.classDecl.heritageClauses);
    const symbol = ((this.classDecl as unknown) as ts.Type).symbol;
    let constructorType = this.typeChecker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration
    );
    let constructSignatures = constructorType.getConstructSignatures();

    if (
      constructSignatures.length === 0 ||
      (constructSignatures.length === 1 &&
        constructSignatures[0].parameters.length === 0)
    ) {
      return '';
    }

    const file = this.classDecl.getSourceFile();

    let constructorArgs = constructSignatures
      .map(
        (sig) =>
          `[${sig.parameters
            .map(
              (param) =>
                `${param.escapedName}: ${this.getTypeNameOfNode(
                  param.declarations[0]
                )}`
            )
            .join(',')}]`
      )
      .join('|');

    let constr = `
      constructor(@SkipSelf() parent: ThObject3D, @Self() args: ThArgs<${constructorArgs}>) {
        super(...args.args);
        parent.add(this);
      }
      public set args(ar: ${constructorArgs}) { /* nothing to do */} 
      `;
    return constr;
  }

  private generateBaseClassImports() {
    const srcFile = this.classDecl.getSourceFile();

    if (srcFile.fileName.search('node_modules/three/') >= 0) {
      this.imports.push(
        ...srcFile.statements
          .filter(ts.isImportDeclaration)
          .map((imp: ts.ImportDeclaration) => {
            let str = imp.getText();
            str = str.substr(0, str.search(' from ')) + " from 'three';";
            return str;
          })
      );
    } else {
      // TODO: non-three class
    }
  }

  private getTypeNameOfNode(decl: ts.Node) {
    if (ts.isParameter(decl) && decl.type) {
      if (ts.isTypeReferenceNode(decl.type)) {
        return (decl.type.typeName as ts.Identifier)?.escapedText;
      }
      return decl.type?.getText();
    }

    return 'any';
  }
}
