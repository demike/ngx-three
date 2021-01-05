import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
} from '@angular/core';

@Component({
  selector: 'abs-th-wrapper',
  template: '',
})
export class ThWrapperBase<T, ARGS extends any[]> implements OnChanges, OnInit {
  public obj?: T;

  constructor() {
    // nothing to do
  }

  @Input()
  public args?: ARGS;

  ngOnInit(): void {
    if (!this.obj) {
      this.createThreeInstance();
    }
  }

  protected createThreeInstance(args?: Iterable<any>) {
    this.obj = new (this.getType())(...(args ?? []));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    if (this.obj) {
      return;
    }

    if (changes['obj']?.currentValue) {
      this.obj = changes['obj']?.currentValue;
    } else {
      this.createThreeInstance(changes['args']?.currentValue);
    }

    for (let key in changes) {
      (this as any)[key] = changes[key].currentValue;
    }
  }

  protected getType(): Type<T> {
    throw new Error('derive me');
  }
}
