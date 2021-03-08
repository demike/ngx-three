export class NgxThreeModuleGen {
  public content = '';
  public generate(classes: string[]) {
    const strClasses = classes.join(',');
    const imports = classes.map((c) => `import { ${c} } from './${c}';`);
    this.content = `
        ${imports.join('')}
        import { NgModule } from '@angular/core';

        @NgModule({
        declarations: [${strClasses}],
        exports: [${strClasses}],
        })
        export class NgxThreeGeneratedModule {}
                `;
  }
}
