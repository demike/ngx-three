import { SourceFile } from 'typescript';
import { NgxThreeMaterial } from './NgxThreeMaterial';

/**
 * A wrapper class generator for three.js node materials
 */
export class NgxThreeNodeMaterial extends NgxThreeMaterial {
  public getBaseClassName(): string {
    return 'Material';
  }

  public getWrapperBaseClassName(): string {
    return 'ThMaterialBase';
  }

  protected override getImportPathForImportStatement(srcFilePath: string, importStatement: string): string {
    const path = super.getImportPathForImportStatement(srcFilePath, importStatement);
    if (path === 'three') {
      return 'three/webgpu';
    }
    return path;
  }

  protected override getImportPathForSourceFile(srcFile: SourceFile): string {
    const path = super.getImportPathForSourceFile(srcFile);
    if (path === 'three') {
      return 'three/webgpu';
    }
    return path;
  }
}
