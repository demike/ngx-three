import * as ts from 'typescript';
import { ParameterDeclaration, SyntaxKind } from 'typescript';
import * as path from 'path';
import { pascalToCamelCase } from './utils';
import { NgxThreeOverrideStub } from './NgxThreeOverrideStub';
import { isOverriddenClass } from './overrides';

const INGORED_MEMBERS = ['parent', 'onUpdate'];

/**
 * abstract base class generator
 *
 * generates an angular wrapper class for a defined three.js class
 */
export abstract class NgxThreeClass {
  public readonly overrideStub?: NgxThreeOverrideStub;
  public content: string;
  public readonly className: string;
  public readonly directiveName: string;
  protected classDecl: ts.ClassDeclaration;
  public readonly wrappedClassName: string;
  public readonly isAbstract: boolean;

  public providersArray?: string;
  public readonly imports: Set<string> = new Set<string>();

  public constructorArgs = '[]';
  public wrappedClassGenericTypeNames = ''; // i.e.: "<T,U>"
  private inputs = '';

  constructor(
    protected classSymbol: ts.Symbol,
    protected typeChecker: ts.TypeChecker,
  ) {
    this.classDecl = this.fetchClassDecleration();
    this.wrappedClassName = this.classSymbol.escapedName as string;
    this.isAbstract = this.classDecl.modifiers?.find((m) => m.kind === SyntaxKind.AbstractKeyword) !== undefined;
    this.className = 'Th' + this.wrappedClassName;
    this.directiveName = 'th-' + pascalToCamelCase(this.wrappedClassName);
    if (isOverriddenClass(this.wrappedClassName)) {
      this.className += 'Gen';
      this.directiveName += 'Gen';
      this.overrideStub = new NgxThreeOverrideStub(this);
    }

    this.content = '';
  }

  private fetchClassDecleration() {
    const decl = this.classSymbol.declarations?.[0];
    if (decl && ts.isExportSpecifier(decl)) {
      // this is just an export specifier do not generate a wrapper for it
      // get the right type
      this.classSymbol = this.typeChecker.getTypeAtLocation(decl).symbol;
      return this.classSymbol.declarations?.[0] as unknown as ts.ClassDeclaration;
    } else {
      return decl as ts.ClassDeclaration;
    }
  }

  generate() {
    if (this.getBaseClassName().length > 0 && this.className !== 'Th' + this.getBaseClassName()) {
      this.imports.add(
        `import { Th${this.getBaseClassName()} } from './${
          isOverriddenClass(this.getBaseClassName()) ? NgxThreeOverrideStub.OVERRIDE_SUB_PATH : ''
        }Th${this.getBaseClassName()}';`,
      );
    }

    this.inputs = this.generateMembers(this.classDecl);

    this.providersArray = this.generateProvidersArray();

    // we have at least one input (objRef) --> import it
    this.imports.add("import { Input } from '@angular/core';");

    this.imports.add("import { SkipSelf, Self, Optional, forwardRef, Type } from '@angular/core';");
    const constr = this.generateConstructor();
    this.generateConstructorArgs();
    this.addImportsFrom(this.classDecl);
    const classHeader = this.generateClassHeader();

    this.imports.add(`import { ${this.wrappedClassName} } from '${this.getWrappedClassImportPath()}';`);
    this.imports.add("import { Component, ChangeDetectionStrategy } from '@angular/core';");

    this.imports.add("import { applyValue } from '../util';");

    const ngxClassDeclarationString = `
    /* eslint-disable @typescript-eslint/naming-convention */
    /* eslint-disable no-underscore-dangle */
    /* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
        ${[...this.imports].join('')}

        @Component({
          selector: "${this.directiveName}",
          template: "<ng-content/>",
          changeDetection: ChangeDetectionStrategy.OnPush,
          providers: ${this.providersArray}
        })
        ${classHeader} {
          ${this.generateTypeGetter()}
          ${this.inputs}
          ${constr}
        }
        `;

    this.content = ngxClassDeclarationString;

    this.overrideStub?.generate();
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

  public useWrapperBaseClassNameForBaseClass(potentialBaseClass: string): boolean {
    return 'EventDispatcher' === potentialBaseClass;
  }

  public getWrappedClassImportPath() {
    return this.getImportPathForSourceFile(this.classDecl.getSourceFile());
  }

  protected generateClassHeader() {
    let header = `export ${this.isAbstract ? 'abstract' : ''} class ${this.className}<`;
    if (this.classDecl.typeParameters) {
      header = `${header}${this.classDecl.typeParameters.map((param) => param.getText()).join(',')},`;
      this.wrappedClassGenericTypeNames = `<${this.classDecl.typeParameters
        .map((param) => param.name.getText())
        .join(',')}>`;
    }
    header += `
    T extends ${this.wrappedClassName}${this.wrappedClassGenericTypeNames} = ${this.wrappedClassName}${this.wrappedClassGenericTypeNames},
    TARGS = ${this.constructorArgs}>`;

    let baseClassName = 'EventDispatcher';
    const wrapperBaseClassName = this.getWrapperBaseClassName();
    if (this.classDecl.heritageClauses) {
      // if we have a base class and we are not Object3D
      const clause = this.classDecl.heritageClauses[0].getText();

      baseClassName = clause.replace('extends ', '').split('<')[0];

      if (this.useWrapperBaseClassNameForBaseClass(baseClassName)) {
        this.imports.add(`import { ${wrapperBaseClassName} } from '../${wrapperBaseClassName}';`);
        header = `${header} extends ${wrapperBaseClassName}<T,TARGS>`;
        return header;
      } else {
        this.imports.add(`import { Th${baseClassName} } from './Th${baseClassName}';`);
        header = `${header}  ${clause.replace('extends ', 'extends Th')}`;
      }
    } else {
      // no base class --> use the wrapper base class
      header = `${header} extends ${wrapperBaseClassName}<T,TARGS>`;
      return header;
    }

    let defaultParams = this.generateDefaultTypParametersForParentClass();

    if (header.endsWith('>')) {
      header = header.slice(0, -1);
      header += ',';

      defaultParams = defaultParams.slice(this.classDecl.heritageClauses[0].types[0].typeArguments?.length ?? 0);
    } else {
      // find out the parent class default type parameters

      header += '<';
    }

    defaultParams.push('T');
    defaultParams.push('TARGS');
    header += `${defaultParams.join(',')}>`;
    return header;
  }

  private generateMembers(classDeclaration: ts.ClassDeclaration): string {
    let members = '';
    if (!classDeclaration.members) {
      return members;
    }

    for (const member of classDeclaration.members) {
      const memberName = (member.name as ts.Identifier | undefined)?.escapedText as string;

      if (
        !memberName ||
        INGORED_MEMBERS.find((m) => m === memberName) ||
        (member as ts.PropertyDeclaration).modifiers?.find(
          (m) => m.kind === ts.SyntaxKind.PrivateKeyword || m.kind === ts.SyntaxKind.ProtectedKeyword,
        )
      ) {
        // it's private or protected, or in the ingore list --> do not expose
        continue;
      }

      if (ts.isPropertyDeclaration(member) && member.type) {
        // generate the setter
        members += this.generateSetterInput(memberName, member);
        // gerate the getter
        members += this.generateGetter(memberName, member);
      } else if (ts.isSetAccessor(member) && member.parameters[0]?.type) {
        member.parameters[0].type;
        // member.parameters
        members += this.generateSetterInput(memberName, member, member.parameters[0]?.type.getText());
      } else if (ts.isGetAccessor(member) && member.type) {
        members += this.generateGetter(memberName, member);
      }
    }
    return members;
  }

  protected generateSetterInput(
    memberName: string,
    member: ts.PropertyDeclaration | ts.SetAccessorDeclaration,
    typeName?: string,
  ) {
    const isReadonly = member.modifiers?.find((m) => m.kind === ts.SyntaxKind.ReadonlyKeyword);

    const isStatic = member.modifiers?.find((m) => m.kind === ts.SyntaxKind.StaticKeyword);

    if (isStatic) {
      return '';
    }

    const setters = this.getSettersOfMember(member);

    if (setters.length === 0 && isReadonly) {
      return '';
    }

    let str = `
    @Input()
    public set ${memberName}( value: ${this.sanitizeMemberType(typeName ?? member.type?.getText())}`;

    if (setters.length === 0) {
      // no setter just set it
      str += `) {
          if(this._objRef) { this._objRef.${memberName} = value;}
        }
          `;
      return str;
    }

    // add the imports from member file name (might be used for setter parameters)
    this.addImportsFrom(setters[0]);
    for (const setter of setters) {
      str += `| [${setter.parameters.map((p) => p.getText()).join(',')}]`;
    }

    if (!isReadonly) {
      const optionalToken = member.questionToken ? ' | undefined' : '';
      str += `) {
      if(this._objRef) {
       this._objRef.${memberName} = applyValue<${
         typeName ?? member.type?.getText()
       }${optionalToken}>(this._objRef.${memberName}, value);
      }
    }`;
    } else {
      str += `) {
        if(this._objRef) {
         applyValue<${typeName ?? member.type?.getText()}>(this._objRef.${memberName}, value);
        }
      }`;
    }

    return str;
  }

  private getSettersOfMember(member: ts.PropertyDeclaration | ts.SetAccessorDeclaration) {
    const setters: ts.MethodDeclaration[] = [];
    if (!member.type) {
      return setters;
    }

    const tNodes: ts.Node[] = [];

    if (ts.isUnionTypeNode(member.type)) {
      tNodes.push(...member.type.types);
    } else {
      tNodes.push(member.type);
    }

    for (const tNode of tNodes) {
      const decl = this.typeChecker.getTypeAtLocation(tNode).getProperty('set')?.declarations?.[0];
      if (decl && ts.isMethodDeclaration(decl)) {
        setters.push(decl);
      }
    }

    return setters;
  }

  public generateGetter(memberName: string, member: ts.PropertyDeclaration | ts.GetAccessorDeclaration) {
    const isStatic = member.modifiers?.find((m) => m.kind === ts.SyntaxKind.StaticKeyword);

    if (isStatic) {
      return `

        public static readonly ${memberName} = ${this.wrappedClassName}.${memberName};
      `;
    }

    return `
    public get ${memberName}(): ( ${this.sanitizeMemberType(member.type?.getText())}) | undefined {
      return this._objRef?.${memberName};
    }`;
  }

  private generateConstructorArgs() {
    const symbol = (this.classDecl as unknown as ts.Type).symbol;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const constructorType = this.typeChecker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!);
    const constructSignatures = constructorType.getConstructSignatures();

    if (
      constructSignatures.length === 0 ||
      (constructSignatures.length === 1 && constructSignatures[0].parameters.length === 0)
    ) {
      return;
    }

    this.constructorArgs = constructSignatures.map(this.getConstructorSignatureAsString).join('|');
  }

  private getConstructorSignatureAsString(sig: ts.Signature) {
    if (sig.parameters.length === 1) {
      // config object
      const parameterDefParts = (sig.parameters[0].declarations?.[0] as ParameterDeclaration).getText().split(':');
      return `/* ${parameterDefParts[0]} */ ${parameterDefParts[1]}`;
    } else {
      // constructor args array
      return `[${sig.parameters
        .map((param) => (param.declarations?.[0] as ParameterDeclaration).getText())
        .join(',')}]`;
    }
  }

  private addImportsFrom(classNode: ts.Node) {
    const srcFile = classNode.getSourceFile();

    if (srcFile.fileName.search('node_modules/@types/three/') >= 0) {
      srcFile.statements
        .filter(ts.isImportDeclaration)
        .map((imp: ts.ImportDeclaration) => this.getImportPathForImportStatement(srcFile.fileName, imp.getText()))
        .forEach((el) => this.imports.add(el));

      const symbol = this.typeChecker.getSymbolAtLocation(srcFile);
      const exports = this.typeChecker.getExportsOfModule(symbol as ts.Symbol);
      const exportsFrom = this.getImportPathForSourceFile(srcFile);

      exports
        .filter((exp) => exp.escapedName !== this.wrappedClassName)
        .forEach((exp) => {
          this.imports.add(`import { ${exp.escapedName} } from '${exportsFrom}';`);
        });
    } else {
      // TODO: non-three class
    }
  }

  protected getImportPathForImportStatement(srcFilePath: string, importStatement: string) {
    const fromPos = importStatement.search(' from ');
    const importStatementFrom = importStatement.substr(fromPos + 6).replace(/("|'|;)/g, '');

    if (importStatementFrom === 'three') {
      return importStatement;
    }

    const importPath = path.normalize(path.join(path.dirname(srcFilePath), importStatementFrom)).replace(/\\/g, '/');
    return `${importStatement.substring(0, fromPos)} from "${importPath.substring(
      importPath.search('@types/three/') + 7,
    )}";`;
    /*
    let strFrom = ' "three";';
    if (importPath.search('node_modules/@types/three/examples') >= 0) {
      strFrom = " '" + importPath.substr(importPath.search('three/examples/jsm')).replace('.d.ts', '') + "';";
    }

    importStatement = importStatement.substr(0, fromPos) + ' from ' + strFrom;
    return importStatement;
    */
  }

  protected getImportPathForSourceFile(srcFile: ts.SourceFile) {
    const fileName = srcFile.fileName;
    if (fileName.search('node_modules/@types/three/examples') >= 0) {
      const importPath = fileName
        .substr(fileName.indexOf('/node_modules/@types/three/'))
        .replace('/node_modules/@types/', '')
        .replace('.d.ts', '.js');
      return importPath;
    }
    return 'three';
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

    for (const clause of node.heritageClauses) {
      if (clause.token === ts.SyntaxKind.ExtendsKeyword && clause.types.length === 1) {
        const classDecl: ts.Type = checker.getTypeAtLocation(clause.types[0].expression);

        const s = classDecl.getSymbol();
        if (!s || s.declarations?.length === 0) {
          return [];
        }

        const typeParams = (s.declarations?.[0] as ts.ClassDeclaration).typeParameters as
          | ts.TypeParameterDeclaration[]
          | undefined;
        if (!typeParams) {
          return [];
        }

        return typeParams
          .filter((p) => p.default)
          .map((p) => {
            const typeNode = p.default;
            if ((typeNode as ts.UnionOrIntersectionTypeNode).types) {
              (typeNode as ts.UnionOrIntersectionTypeNode).types?.forEach((type) => {
                if (ts.isTypeReferenceNode(type)) {
                  this.imports.add(
                    `import { ${type.typeName.getText()} } from '${this.getImportPathForSourceFile(
                      type.getSourceFile(),
                    )}';`,
                  );
                } else if (ts.isArrayTypeNode(type)) {
                  const typeRefNode = type.elementType as any as ts.TypeReferenceNode;
                  this.imports.add(
                    `import { ${typeRefNode.typeName.getText()} } from '${this.getImportPathForSourceFile(
                      typeRefNode.getSourceFile(),
                    )}';`,
                  );
                }
              });
            } else if (typeNode && ts.isTypeReferenceNode(typeNode)) {
              this.imports.add(
                `import { ${typeNode.typeName.getText()} } from '${this.getImportPathForSourceFile(
                  typeNode.getSourceFile(),
                )}';`,
              );
            } else {
              // TODO:
              console.log('TODO');
            }

            return (p.default as ts.Node).getText();
          })
          .filter((str) => str !== undefined);
      }
    }

    return [];
  }

  protected generateTypeGetter() {
    if (this.isAbstract) {
      return '';
    }

    return `public getType(): Type<${this.wrappedClassName}${this.wrappedClassGenericTypeNames}> { return ${this.wrappedClassName}; };`;
  }

  protected sanitizeMemberType(type?: string) {
    return type?.replace(': this', ': T');
  }
}
