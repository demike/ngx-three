export class NgxThreeBarrelGen {
  public content = '';
  public generate(classes: string[]) {
    const exports = classes.map((c) => `export * from './${c}';`);
    this.content = `
        /*
          Generated, modifications will get overwritten
        */

        ${exports.join('')}
        `;
  }
}
