import * as ts from 'typescript';
import { ParameterDeclaration } from 'typescript';

const INGORED_MEMBERS = ['parent'];

const pascalToCamelCase = (s: string) => `${s[0].toLowerCase()}${s.slice(1)}`;

/**
 * abstract base class generator
 *
 * generates an angular wrapper class for a defined three.js class
 */
export abstract class NgxThreeClass {
  public content: string;
  public readonly className: string;
  protected classDecl: ts.ClassDeclaration;
  public readonly wrappedClassName: string;
  protected imports: Set<string> = new Set<string>();

  private constructorArgs = '[]';
  private wrappedClassGenericTypeNames = ''; // i.e.: "<T,U>"
  private inputs: string = '';

  constructor(
    protected classSymbol: ts.Symbol,
    protected typeChecker: ts.TypeChecker
  ) {
    this.classDecl = this.classSymbol.declarations[0] as ts.ClassDeclaration;
    this.wrappedClassName = this.classSymbol.escapedName as string;

    this.className = 'Th' + this.wrappedClassName;
    this.content = '';
  }

  generate() {
    if (this.className !== 'Th' + this.getBaseClassName()) {
      this.imports.add(
        `import { Th${this.getBaseClassName()} } from './Th${this.getBaseClassName()}';`
      );
    }

    this.inputs = this.generateMembers(this.classDecl);
    const directiveName = 'th-' + pascalToCamelCase(this.wrappedClassName);
    const providersArray = this.generateProvidersArray();

    if (this.inputs.length > 0) {
      this.imports.add("import { Input } from '@angular/core';");
    }
    this.imports.add(
      "import { SkipSelf, Self, Optional, forwardRef, Type } from '@angular/core';"
    );
    const constr = this.generateConstructor();
    this.generateConstructorArgs();
    this.addImportsFrom(this.classDecl);
    const classHeader = this.generateClassHeader();

    this.imports.add(`import { ${this.wrappedClassName} } from 'three';`);
    this.imports.add(
      "import { Component, ChangeDetectionStrategy } from '@angular/core';"
    );

    this.imports.add("import { applyValue } from '../util';");

    const ngxClassDeclarationString = `  
        ${[...this.imports].join('')}
    
        @Component({
          selector: "${directiveName}",
          template: "",
          changeDetection: ChangeDetectionStrategy.OnPush,
          providers: ${providersArray}
        })
        ${classHeader} {
          public obj!: ${this.wrappedClassName}${
      this.wrappedClassGenericTypeNames
    };
          protected getType(): Type<${this.wrappedClassName}${
      this.wrappedClassGenericTypeNames
    }> { return ${this.wrappedClassName}};
          ${this.inputs}
          ${constr}
        }
        `;

    this.content = ngxClassDeclarationString;
  }

  /**
   * implement this method for custom constructor
   */
  protected abstract generateConstructor(): string;
  protected abstract generateProvidersArray(): string;

  /**
   * the name of the base class name all three js classes are derived from i.e.: "Object3D"
   */
  protected abstract getBaseClassName(): string;

  /**
   * get wrapper base class name i.e.: "ThObjectBase"
   */
  public abstract getWrapperBaseClassName(): string;

  private generateClassHeader() {
    let header = `export class ${this.className}<`;
    if (this.classDecl.typeParameters) {
      header = `${header}${this.classDecl.typeParameters
        .map((param) => param.getText())
        .join(',')},`;
      this.wrappedClassGenericTypeNames = `<${this.classDecl.typeParameters
        .map((param) => param.name.getText())
        .join(',')}>`;
    }
    header += `TARGS extends any[] = ${this.constructorArgs}>`;

    let baseClassName = this.getBaseClassName();
    let wrapperBaseClassName = this.getWrapperBaseClassName();
    if (this.wrappedClassName === baseClassName) {
      this.imports.add(
        `import { ${wrapperBaseClassName} } from '../${wrapperBaseClassName}';`
      );
      header = `${header} extends ${wrapperBaseClassName}<TARGS>`;
      return header;
    }

    if (this.classDecl.heritageClauses) {
      // if we have a base class and we are not Object3D
      let clause = this.classDecl.heritageClauses[0].getText();
      baseClassName = clause.replace('extends ', '').split('<')[0];
      this.imports.add(
        `import { Th${baseClassName} } from './Th${baseClassName}';`
      );
      header = `${header}  ${clause.replace('extends ', 'extends Th')}`;
    }

    if (header.endsWith('>')) {
      header = header.slice(0, -1);
      header += ',TARGS>';
    } else {
      // find out the parent class default type parameters
      const defaultParams = this.generateDefaultTypParametersForParentClass();
      defaultParams.push('TARGS');

      header += `<${defaultParams.join(',')}>`;
    }

    return header;
  }

  private generateMembers(classDeclaration: ts.ClassDeclaration): string {
    let members = '';

    for (let member of classDeclaration.members) {
      if (ts.isPropertyDeclaration(member) && member.type) {
        let memberName = (member.name as ts.Identifier).escapedText as string;
        if (
          INGORED_MEMBERS.find((m) => m === memberName) ||
          member.modifiers?.find(
            (m) =>
              m.kind === ts.SyntaxKind.PrivateKeyword ||
              m.kind === ts.SyntaxKind.ProtectedKeyword
          )
        ) {
          // it's private or protected, or in the ingore list --> do not expose
          continue;
        }

        const type = this.typeChecker!.getTypeAtLocation(member.type);
        const isReadonly = member.modifiers?.find(
          (m) => m.kind === ts.SyntaxKind.ReadonlyKeyword
        );

        // generate the setter
        members += this.generateSetterInput(
          memberName,
          member as ts.PropertyDeclaration,
          type
        );
        // gerate the getter
        members += this.generateGetter(
          memberName,
          member as ts.PropertyDeclaration,
          type
        );
      }
    }
    return members;
  }

  private generateSetterInput(
    memberName: string,
    member: ts.PropertyDeclaration,
    memberType: ts.Type
  ) {
    const isReadonly = member.modifiers?.find(
      (m) => m.kind === ts.SyntaxKind.ReadonlyKeyword
    );

    const isStatic = member.modifiers?.find(
      (m) => m.kind === ts.SyntaxKind.StaticKeyword
    );

    if (isStatic) {
      return '';
    }

    const setters = this.getSettersOfMember(member);

    if (setters.length === 0 && isReadonly) {
      return '';
    }

    let str = `
    @Input()
    public set ${memberName}( value: ${member.type?.getText()}`;

    if (setters.length === 0) {
      // no setter just set it
      str += `) {
          if(this.obj) { this.obj.${memberName} = value;}
        }
          `;
      return str;
    }

    // add the imports from member file name (might be used for setter parameters)
    this.addImportsFrom(setters[0]);
    for (let setter of setters) {
      str += `| [${setter.parameters.map((p) => p.getText()).join(',')}]`;
    }

    if (!isReadonly) {
      str += `) {
      if(this.obj) {
       this.obj.${memberName} = applyValue<${member.type?.getText()}>(this.obj.${memberName}, value);
      }
    }`;
    } else {
      str += `) {
        if(this.obj) {
         applyValue<${member.type?.getText()}>(this.obj.${memberName}, value);
        }
      }`;
    }

    return str;
  }

  private getSettersOfMember(member: ts.PropertyDeclaration) {
    let setters: ts.MethodDeclaration[] = [];
    if (!member.type) {
      return setters;
    }

    const tNodes: ts.Node[] = [];

    if (ts.isUnionTypeNode(member.type)) {
      tNodes.push(...member.type.types);
    } else {
      tNodes.push(member.type);
      const type = this.typeChecker!.getTypeAtLocation(member.type).getProperty(
        'set'
      )?.declarations[0];
    }

    for (let tNode of tNodes) {
      const decl = this.typeChecker!.getTypeAtLocation(tNode).getProperty('set')
        ?.declarations[0];
      if (decl && ts.isMethodDeclaration(decl)) {
        setters.push(decl);
      }
    }

    return setters;
  }

  public generateGetter(
    memberName: string,
    member: ts.PropertyDeclaration,
    memberType: ts.Type
  ) {
    // TODO implement me
    return ''; // return `public get${memberName}(): ${member.type?.getText()} { return this.obj?.${memberName}; }`;
  }

  private generateConstructorArgs() {
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
      return;
    }

    this.constructorArgs = constructSignatures
      .map(
        (sig) =>
          `[${sig.parameters
            .map((param) =>
              (param.declarations[0] as ParameterDeclaration).getText()
            )
            .join(',')}]`
      )
      .join('|');
  }

  private addImportsFrom(classNode: ts.Node) {
    const srcFile = classNode.getSourceFile();

    if (srcFile.fileName.search('node_modules/three/') >= 0) {
      srcFile.statements
        .filter(ts.isImportDeclaration)
        .map((imp: ts.ImportDeclaration) => {
          let str = imp.getText();
          str = str.substr(0, str.search(' from ')) + " from 'three';";
          return str;
        })
        .forEach((el) => this.imports.add(el));

      let symbol = this.typeChecker.getSymbolAtLocation(srcFile);
      let exports = this.typeChecker.getExportsOfModule(symbol!);
      exports
        .filter((exp) => exp.escapedName != this.wrappedClassName)
        .forEach((exp) => {
          this.imports.add(`import { ${exp.escapedName} } from 'three';`);
        });
    } else {
      // TODO: non-three class
    }
  }

  /**
   * get the default values for the generic base class
   */
  generateDefaultTypParametersForParentClass(): string[] {
    const node = this.classDecl;
    const checker = this.typeChecker;

    if (!node.heritageClauses) {
      return [];
    }

    for (let clause of node.heritageClauses) {
      if (
        clause.token == ts.SyntaxKind.ExtendsKeyword &&
        clause.types.length == 1
      ) {
        let classDecl: ts.Type = checker.getTypeAtLocation(
          clause.types[0].expression
        );

        let s = classDecl.getSymbol();
        if (!s || s.declarations.length === 0) {
          return [];
        }

        let typeParams = (s.declarations[0] as ts.ClassDeclaration)
          .typeParameters as ts.TypeParameterDeclaration[] | undefined;
        if (!typeParams) {
          return [];
        }

        return typeParams
          .filter((p) => p.default)
          .map((p) => {
            (p.default! as ts.UnionOrIntersectionTypeNode).types.forEach(
              (type) => {
                if (ts.isTypeReferenceNode(type)) {
                  // TODO: allow non "three" imports
                  this.imports.add(
                    `import { ${type.typeName.getText()} } from 'three';`
                  );
                }
              }
            );

            return p.default!.getText();
          })
          .filter((s) => s !== undefined) as string[];
      }
    }

    return [];
  }
}
