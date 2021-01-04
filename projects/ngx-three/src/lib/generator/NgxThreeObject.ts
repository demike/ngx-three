import { NgxThreeClass } from './NgxThreeClass';

export class NgxThreeObject extends NgxThreeClass {
  generate() {
    if (this.className != 'ThObject3D') {
      this.imports.add("import { ThObject3D } from './ThObject3D';");
    }
    super.generate();
  }
}
