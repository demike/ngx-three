import * as prettier from 'prettier';
import * as ts from 'typescript';

const pascalToCamelCase = (s: string) => `${s[0].toLowerCase()}${s.slice(1)}`;

export class NgxThreeClass {
  public content: string;
  public readonly className: string;
  private classDecl: ts.ClassDeclaration;
  public readonly wrappedClassName: string;
  private imports: string[] = [];
  private constructorArgs = '[]';

  constructor(
    private classSymbol: ts.Symbol,
    private typeChecker: ts.TypeChecker
  ) {
    this.classDecl = this.classSymbol.declarations[0] as ts.ClassDeclaration;
    this.wrappedClassName = this.classSymbol.escapedName as string;

    this.className = 'Th' + this.wrappedClassName;
    this.content = '';
  }

  generate() {
    const inputs = this.generateInputs(this.classDecl);
    const directiveName = 'th-' + pascalToCamelCase(this.wrappedClassName);

    if (inputs.members.length > 0) {
      this.imports.push("import { Input } from '@angular/core';");
    }
    this.imports.push(
      "import { SkipSelf, Self, Optional, forwardRef, Type } from '@angular/core';"
    );
    const constr = this.generateConstructor(this.classDecl);
    this.generateBaseClassImports();
    const classHeader = this.generateClassHeader();

    const ngxClassDeclarationString = `
        import { ${this.wrappedClassName} } from 'three';
        import { Component, ChangeDetectionStrategy } from '@angular/core';
        import { ThObject3D } from './ThObject3D';
        import { applyValue } from '../util';
        ${this.imports.join('')}
    
        @Component({
          selector: "${directiveName}",
          inputs: ${inputs.inputNames},
          template: "",
          changeDetection: ChangeDetectionStrategy.OnPush,
          providers: [{provide: ThObject3D, useExisting: forwardRef(() => ${
            this.className
          })}]
        })
        ${classHeader} {
          protected obj!: ${this.wrappedClassName};
          protected getObjectType(): Type<${this.wrappedClassName}> { return ${
      this.wrappedClassName
    }};
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
    let header = `export class ${this.className}<`;
    if (this.classDecl.typeParameters) {
      header = `${header}${this.classDecl.typeParameters
        .map((param) => param.getText())
        .join(',')},`;
    }
    header += `TARGS extends any[] = ${this.constructorArgs}>`;

    let baseClassName = 'Object3D';
    if (this.wrappedClassName === 'Object3D') {
      this.imports.push("import { ThWrapperBase } from '../ThWrapperBase'");
      header = `${header} extends ThWrapperBase<TARGS>`;
    }

    if (this.classDecl.heritageClauses) {
      // if we have a base class and we are not Object3D
      let clause = this.classDecl.heritageClauses[0].getText();
      baseClassName = clause.replace('extends ', '').split('<')[0];
      this.imports.push(
        `import { Th${baseClassName} } from './Th${baseClassName}';`
      );
      header = `${header}  ${clause.replace('extends ', 'extends Th')}`;
    }

    if (header.endsWith('>')) {
      header = header.slice(0, -1);
      header += ',TARGS>';
    } else {
      header += '<TARGS>';
    }

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
              member as ts.PropertyDeclaration,
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

  private generateSetterInput(
    memberName: string,
    member: ts.PropertyDeclaration,
    memberType: ts.Type
  ) {
    if (
      member.modifiers?.find(
        (m) =>
          m.kind === ts.SyntaxKind.PrivateKeyword ||
          m.kind === ts.SyntaxKind.ProtectedKeyword
      )
    ) {
      // it's private or protected --> do not expose
      return;
    }

    const isReadonly = member.modifiers?.find(
      (m) => m.kind === ts.SyntaxKind.ReadonlyKeyword
    );
    const setter = memberType.getProperty('set')?.declarations[0];

    if (isReadonly && !setter) {
      // can't set it
      return;
    }

    let str = `
    @Input()
    public set ${memberName}( value: ${memberType.symbol.escapedName}`;

    if (isReadonly) {
    } else if (setter && ts.isMethodDeclaration(setter)) {
      // has a setter
      str += `| [${setter.parameters.map((p) => p.getText()).join(',')}]) {
        if(this.obj) {
         this.obj.${memberName} = applyValue<${
        memberType.symbol.escapedName
      }>(this.obj.${memberName}, value);
        }
      }`;
    } else {
      // no setter just set it
      str += `) {
        if(this.obj) { this.obj.${memberName} = value;}
      }
      `;
    }
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

    this.constructorArgs = constructSignatures
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
      constructor(@SkipSelf() parent: ThObject3D) {
        super(parent);
      }
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
