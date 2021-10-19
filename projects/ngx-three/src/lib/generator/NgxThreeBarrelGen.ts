import { NgxThreeClass } from './NgxThreeClass';
import { NgxThreeOverrideStub } from './NgxThreeOverrideStub';

export class NgxThreeBarrelGen {
  public content = '';
  public generate(classes: NgxThreeClass[]) {
    const exports: string[] = [];
    classes.map((c) => {
      exports.push(`export * from './${c.className}';`);
      if (c.overrideStub) {
        exports.push(`export * from './${NgxThreeOverrideStub.OVERRIDE_SUB_PATH}${c.overrideStub.className}';`);
      }
    });
    this.content = `
        /*
          Generated, modifications will get overwritten
        */

        ${exports.join('')}
        `;
  }
}
