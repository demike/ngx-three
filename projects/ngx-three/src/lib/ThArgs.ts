import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[args]',
})
export class ThArgs<T extends Iterable<any> = []> {
  @Input()
  public args: T;
  constructor() {
    this.args = [] as any;
  }
}
