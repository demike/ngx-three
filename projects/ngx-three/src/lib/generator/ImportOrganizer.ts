import { existsSync, readFileSync } from 'fs';
import * as ts from 'typescript';
import { normalize } from 'path';

class LanguageServiceHostImpl implements ts.LanguageServiceHost {
  private files: { [fileName: string]: { content: string; version: number } } = {};

  public options: ts.CompilerOptions;
  constructor(public readonly basePath: string) {
    // this.basePath = path.normalize(basePath);
    const tsconfig = ts.findConfigFile(this.basePath, ts.sys.fileExists, 'tsconfig.lib.json');

    const compilerOptions = tsconfig
      ? ts.convertCompilerOptionsFromJson(
          ts.readConfigFile(tsconfig, ts.sys.readFile).config.compilerOptions,
          this.basePath,
        ).options
      : ts.getDefaultCompilerOptions();

    this.options = compilerOptions;
  }

  readFile(path: string, encoding?: string | undefined): string {
    path = normalize(path);
    const file = this.files[path];
    if (!file) {
      const options = encoding !== undefined ? { encoding: encoding as BufferEncoding } : 'utf8';
      const content = readFileSync(path, options);
      this.addFile(path, content);
      return content;
    }

    return file.content;
  }

  addFile(fileName: string, content: string) {
    this.files[fileName] = { content, version: 0 };
  }

  getScriptFileNames(): string[] {
    return Object.keys(this.files);
  }

  getScriptVersion(fileName: string): string {
    return this.files[fileName]?.version.toString() || '0';
  }

  getScriptSnapshot(fileName: string): ts.IScriptSnapshot | undefined {
    fileName = normalize(fileName);
    const file = this.files[fileName];
    if (file) {
      return ts.ScriptSnapshot.fromString(file.content);
    }
    return undefined;
  }

  getCurrentDirectory(): string {
    return this.basePath; // process.cwd();
  }

  getCompilationSettings(): ts.CompilerOptions {
    return this.options;
  }

  getDefaultLibFileName(options: ts.CompilerOptions): string {
    return ts.getDefaultLibFilePath(options);
  }

  fileExists(fileName: string): boolean {
    fileName = normalize(fileName);
    return !!this.files[fileName] || existsSync(fileName);
  }
}

const applyChanges = (input: string, changes: readonly ts.TextChange[]) =>
  changes.reduceRight((text, change) => {
    const head = text.slice(0, change.span.start);
    const tail = text.slice(change.span.start + change.span.length);

    return `${head}${change.newText}${tail}`;
  }, input);

export class ImportOrganizer {
  private ls: ts.LanguageService;
  private host: LanguageServiceHostImpl;
  constructor(basePath: string) {
    this.host = new LanguageServiceHostImpl(basePath);
    this.ls = ts.createLanguageService(this.host);
  }

  addFile(fileName: string, content: string) {
    this.host.addFile(fileName, content);
  }

  getFile(fileName: string) {
    return this.host.readFile(fileName);
  }

  organizeImports(fileName: string) {
    fileName = normalize(fileName);
    const fileChanges = this.ls.organizeImports({ type: 'file', fileName }, {}, {});
    const content = this.host.readFile(fileName);
    if (fileChanges.length > 0 && content) {
      this.host.addFile(fileName, applyChanges(content, fileChanges[0].textChanges));
    }
  }

  addMissingImports(fileName: string) {
    fileName = normalize(fileName);
    const combinedCodeFix = this.ls.getCombinedCodeFix({ type: 'file', fileName }, 'fixMissingImport', {}, {});

    if (combinedCodeFix?.changes.length > 0) {
      const content = this.host.readFile(fileName);
      if (content) {
        this.host.addFile(fileName, applyChanges(content, combinedCodeFix.changes[0].textChanges));
      }
    }
  }
}
