/* eslint-disable max-len */
import { pascalToCamelCase } from './utils';

export class NgxThreeOverrideStub {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public static OVERRIDE_SUB_PATH = 'overrides/';
  public content: string;
  public readonly className: string;
  public readonly directiveName: string;

  constructor(
    protected origClass: {
      className: string;
      wrappedClassName: string;
      providersArray?: string;
      wrappedClassGenericTypeNames: string;
      constructorArgs: string;
      imports: Set<string>;
    }
  ) {
    this.className = 'Th' + origClass.wrappedClassName;
    this.directiveName = 'th-' + pascalToCamelCase(origClass.wrappedClassName);
    this.content = '';
  }

  generate() {
    this.content = `
    /* eslint-disable @typescript-eslint/naming-convention */
    /* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
    /* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
    ${this.generateGenClassImports()}
    import { ${this.className}Gen } from '../${this.className}Gen';

    @Component({
      selector: "${this.directiveName}",
      template: "<ng-content/>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: ${this.origClass.providersArray?.replace(this.origClass.className, this.className)}
    })
    export class ${this.className}<T extends ${this.origClass.wrappedClassName}${
      this.origClass.wrappedClassGenericTypeNames
    } = ${this.origClass.wrappedClassName}${this.origClass.wrappedClassGenericTypeNames},
    TARGS extends any[] = ${this.origClass.constructorArgs}> extends ${this.className}Gen<T, TARGS> {
        // TODO: implement me!
    }
    `;
  }

  generateGenClassImports(): string {
    return Array.from(this.origClass.imports.values())
      .map((i) => i.replace('./', './../'))
      .join('');
  }
}
