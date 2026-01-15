import { NgxThreeClass } from './NgxThreeClass';
import { NgxThreeOverrideStub } from './NgxThreeOverrideStub';

export class NgxThreeModuleGen {
  public content = '';
  public generate(classes: NgxThreeClass[]) {
    let strClasses = '';
    const imports: string[] = [];
    classes.forEach((c) => {
      if (c.isAbstract) {
        return;
      }
      strClasses += c.className + ',';
      imports.push(`import { ${c.className} } from './${c.className}';`);
      if (c.overrideStub) {
        strClasses += c.overrideStub.className + ',';
        imports.push(
          `import { ${c.overrideStub.className} } from './${NgxThreeOverrideStub.OVERRIDE_SUB_PATH}${c.overrideStub.className}';`,
        );
      }
    });

    this.content = `
        ${imports.join('')}
        import { NgModule } from '@angular/core';

        @NgModule({
        imports: [${strClasses}],
        exports: [${strClasses}],
        })
        export class NgxThreeGeneratedModule {}
                `;
  }
}
