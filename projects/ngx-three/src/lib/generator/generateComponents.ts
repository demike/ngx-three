import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import * as ts from 'typescript';
import { NgxThreeClass } from './NgxThreeClass';
import { NgxThreeModuleGen } from './NgxThreeModuleGen';
import * as prettier from 'prettier';
import { ImportOrganizer } from './ImportOrganizer';

class NgxThreeClassGenerator {
  public readonly baseOutPath = join(__dirname, '../generated');
  public readonly ngxThreeClassMap = new Map<string, NgxThreeClass>();
  private typeChecker?: ts.TypeChecker;

  constructor() {}

  generate(exportTypeName: string) {
    const threeTypes = this.getInterfacePropertyNames(exportTypeName);
    threeTypes.forEach((type) => {
      const cls = this.generateNgxThreeClass(type);
      this.ngxThreeClassMap.set(cls.className, cls);
      this.writeClassToFile(cls);
    });

    this.generateNgxModule(Array.from(this.ngxThreeClassMap.keys()));
  }

  private generateNgxThreeClass(classSymbol: ts.Symbol): NgxThreeClass {
    const ngxClass = new NgxThreeClass(classSymbol, this.typeChecker!);
    ngxClass.generate();

    return ngxClass;
  }

  private generateNgxModule(classNames: string[]) {
    const ngxModule = new NgxThreeModuleGen();
    ngxModule.generate(classNames);

    this.writeFile('ngx-three-generated.module', ngxModule.content);
  }

  private writeFile(fileName: string, content: string) {
    try {
      const organizer = new ImportOrganizer();
      content = organizer.organizeImports(
        this.baseOutPath + fileName + '.ts',
        content
      );
      content = prettier.format(content, {
        parser: 'babel-ts',
      });
    } catch (e) {
      console.log(e);
    }
    writeFileSync(join(this.baseOutPath, fileName + '.ts'), content);
  }

  private writeClassToFile(cls: NgxThreeClass) {
    this.writeFile(cls.className, cls.content);
  }

  private getInterfacePropertyNames(interfaceName: string) {
    const componentsRecordPath = join(__dirname, 'three_types.ts');
    const configFile = ts.findConfigFile(
      __dirname,
      ts.sys.fileExists,
      'tsconfig.generate.json'
    );
    if (!configFile) {
      throw new Error("can't find tsconfig.lib.json");
    }

    const { config, error } = ts.parseConfigFileTextToJson(
      configFile,
      readFileSync(configFile, { encoding: 'utf-8' })
    );
    if (error) {
      console.error(error);
      process.exit(1);
    }

    const { options } = ts.convertCompilerOptionsFromJson(
      config.compilerOptions,
      '..'
    );
    const program = ts.createProgram([componentsRecordPath], {
      ...options,
      baseUrl: '..',
    });

    const sourceFile = program.getSourceFile(componentsRecordPath);
    if (!sourceFile) {
      throw new Error("can't find three_types.ts");
    }

    const typeChecker = program.getTypeChecker();
    this.typeChecker = typeChecker;

    const visit = <T extends unknown>(
      node: ts.Node,
      f: (n: ts.Node) => T[]
    ): T[] => {
      const results = f(node);
      node.forEachChild((child) => {
        results.push(...visit(child, f));
      });

      return results.filter(Boolean);
    };

    return visit(sourceFile, (node) => {
      if (node.kind === ts.SyntaxKind.InterfaceDeclaration) {
        const declaration = node as ts.InterfaceDeclaration;

        if (declaration.name.escapedText === interfaceName) {
          console.log(
            typeChecker
              .getTypeAtLocation(declaration)
              .getProperties()
              .map((symbol) => symbol.escapedName)
          );
          return typeChecker.getTypeAtLocation(declaration).getProperties();
          //   .map((symbol) => symbol.escapedName);
        }
      }
      return [];
    }); // as string[];
  }
}

// ---------------------------------------------------
const exportTypeName = 'NgxThreeComponents';

const generator = new NgxThreeClassGenerator();

generator.generate(exportTypeName);
