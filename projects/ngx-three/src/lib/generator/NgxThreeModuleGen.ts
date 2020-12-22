export class NgxThreeModuleGen {
  public content: string = '';
  public generate(classes: string[]) {
    let strClasses = classes.join(',');
    let imports = classes.map((c) => `import { ${c} } from './${c}';`);
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
