import { fstat, existsSync, readFileSync } from 'fs';
import * as ts from 'typescript';

class LanguageServiceHostImpl implements ts.LanguageServiceHost {
  public name: string;
  public content: string;
  public options: ts.CompilerOptions;
  public getDefaultLibFileName = ts.getDefaultLibFileName;
  /**
   * Create a service host instance.
   *
   * @param name path to file
   * @param content file content
   */
  constructor(name: string, content: string) {
    const tsconfig = ts.findConfigFile(name, ts.sys.fileExists);

    const compilerOptions = tsconfig
      ? ts.convertCompilerOptionsFromJson(ts.readConfigFile(tsconfig, ts.sys.readFile).config.compilerOptions, '..').options
      : ts.getDefaultCompilerOptions();

    this.name = name;
    this.content = content;
    this.options = compilerOptions;
  }
  readFile(path: string, encoding?: string | undefined): string | undefined {
    const options = encoding !== undefined ? { encoding: encoding as BufferEncoding } : undefined;
    return readFileSync(path, options) as string | undefined;
  }
  fileExists(path: string): boolean {
    return existsSync(path);
  }

  getNewLine() {
    return '\n';
  }

  getCurrentDirectory() {
    return process.cwd();
  }

  getCompilationSettings() {
    return this.options;
  }

  getScriptFileNames() {
    return [this.name];
  }

  getScriptVersion() {
    return ts.version;
  }

  getScriptSnapshot() {
    return ts.ScriptSnapshot.fromString(this.content);
  }
}

const applyChanges = (input: string, changes: readonly ts.TextChange[]) =>
  changes.reduceRight((text, change) => {
    const head = text.slice(0, change.span.start);
    const tail = text.slice(change.span.start + change.span.length);

    return `${head}${change.newText}${tail}`;
  }, input);

export class ImportOrganizer {
  organizeImports(fileName: string, content: string) {
    const host = new LanguageServiceHostImpl(fileName, content);
    const ls = ts.createLanguageService(host);

    const fileChanges = ls.organizeImports({ type: 'file', fileName }, {}, {});

    return fileChanges.length > 0 ? applyChanges(content, fileChanges[0].textChanges) : content;
  }
}
