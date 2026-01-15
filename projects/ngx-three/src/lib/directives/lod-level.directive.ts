import { Directive, OnDestroy, inject, Input, OnChanges, OnInit } from '@angular/core';
import { ThLOD, ThObject3D } from '../generated';

@Directive({
  selector: '[lodLevel]',
})
export class LODLevelDirective implements OnInit, OnChanges, OnDestroy {
  lod = inject(ThLOD, { skipSelf: true });
  target = inject(ThObject3D, { self: true });

  @Input()
  lodLevel?: { distance?: number; hysteresis?: number };

  ngOnInit(): void {
    if (!this.lodLevel) {
      this.setLevel(); // Make sure setLevel is called even when the component has no input.
    }
  }

  ngOnChanges(): void {
    this.setLevel();
  }

  ngOnDestroy(): void {
    this.removeLevel();
  }

  setLevel() {
    const target = this.target.objRef;
    const lod = this.lod.objRef;
    if (lod && target) {
      this.removeLevel();
      lod.addLevel(target, this.lodLevel?.distance, this.lodLevel?.hysteresis);
    }
  }

  removeLevel() {
    const target = this.target.objRef;
    const lod = this.lod.objRef;
    if (lod && target) {
      const previous = lod.levels.find((l) => l.object === target);
      if (previous) {
        lod.removeLevel(previous.distance);
      }
    }
  }
}
