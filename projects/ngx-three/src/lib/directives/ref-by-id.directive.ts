import { Directive, Input, OnDestroy, Self, SkipSelf } from '@angular/core';
import { Subscription } from 'rxjs';
import { Object3D } from 'three';
import { ThObject3D } from '../generated';
import { createLazyObject3DProxy, isLazyObject3dProxy } from '../loaders/LazyObject3dProxy';

@Directive({
  selector: '[refById]',
})
export class RefByIdDirective implements OnDestroy {
  protected subscription?: Subscription;
  protected parentObj?: Object3D;
  protected id?: string;
  constructor(@Self() private host: ThObject3D, @SkipSelf() private parent: ThObject3D) {
    this.host.autoAddToParent = false;
    this.host.autoDispose = false;
    this.host.objRef = createLazyObject3DProxy();
  }

  @Input()
  set refById(id: string | undefined) {
    this.id = id;
    this.subscription?.unsubscribe();
    this.subscription = this.parent.objRef$.subscribe((obj) => {
      this.parentObj = obj;
      this.applyRef();
    });
  }

  applyRef() {
    if (!this.parentObj || this.id === undefined) {
      return;
    }

    const ref = this.findById(this.parentObj, this.id);
    if (ref) {
      this.setRef(this.host, ref);
    }
  }

  protected findById(parentObj: Object3D, id: string): Object3D | undefined {
    if ((parentObj.name ?? parentObj.uuid) === id) {
      return parentObj;
    }

    for (const child of parentObj.children) {
      const object = this.findById(child, id);
      if (object !== undefined) {
        return object;
      }
    }
    return undefined;
  }

  protected setRef(host: ThObject3D, ref: Object3D) {
    const objRef = host.objRef;
    if (!objRef) {
      return;
    }
    if (isLazyObject3dProxy(objRef)) {
      objRef.objRef = ref;
      host.objRef = objRef;
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
