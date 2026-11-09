import { inject, Injectable, InjectionToken, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { Intersection, Raycaster } from 'three';
import { ThCamera } from '../generated/ThCamera';
import { RaycasterEventDirective } from './raycaster.events.directive';
import { ThObject3D } from '../generated';

export const enum RaycasterEvent {
  mouseEnter = 'mouseEnter',
  mouseExit = 'mouseExit',
  click = 'click',
  pointerDown = 'pointerDown',
  pointerUp = 'pointerUp',
}

// eslint-disable-next-line no-shadow
export interface RaycasterEventMap {
  mouseEnter: { component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap> };
  mouseExit: { component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap> };
  click: { component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap> };
  pointerDown: { component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap> };
  pointerUp: { component: ThObject3D<THREE.Object3DEventMap & RaycasterEventMap> };
}

export const RAYCASTER = new InjectionToken<Raycaster>('A reference to the raycaster object', {
  factory: () => new Raycaster(),
});

interface NearestIntersection extends Intersection {
  target?: RaycasterEventDirective | null;
}

const pointerVector = new THREE.Vector2();

@Injectable()
export class RaycasterService implements OnDestroy {
  private canvas?: HTMLElement;
  private raycaster = inject(RAYCASTER);
  private ngZone = inject(NgZone);
  private selected: RaycasterEventDirective | null = null;
  private enabled = true;
  private camera?: ThCamera;
  private groups: Array<RaycasterEventDirective> = [];
  private paused = false;

  private maxClickDistance = 23;

  private static instanceCnt = 0;

  /**
   * targets of the pointer down event
   */
  private pointerDownEvent?: PointerEvent;

  public readonly nid = RaycasterService.instanceCnt++;

  /**
   * latest pointer move position, processed at most once per animation frame
   */
  private pendingMove?: { x: number; y: number };
  private moveFrameId?: number;

  constructor() {
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
  }

  public ngOnDestroy(): void {
    this.disable();
    this.cancelPendingMove();
    if (this.canvas) {
      this.unsubscribe();
    }
  }

  private subscribe() {
    const canvas = this.canvas;
    if (!canvas) {
      throw new Error('missing canvas');
    }
    // register outside of angular: in zone based apps every pointermove would trigger change detection otherwise
    this.ngZone.runOutsideAngular(() => {
      canvas.addEventListener('pointermove', this.onPointerMove);
      canvas.addEventListener('pointerdown', this.onPointerDown);
      canvas.addEventListener('pointerup', this.onPointerUp);
    });
  }

  private unsubscribe() {
    if (!this.canvas) {
      throw new Error('missing canvas');
    }
    this.canvas.removeEventListener('pointermove', this.onPointerMove);
    this.canvas.removeEventListener('pointerdown', this.onPointerDown);
    this.canvas.removeEventListener('pointerup', this.onPointerUp);
  }

  public enable() {
    this.enabled = true;
  }

  public disable() {
    this.enabled = false;
  }

  public pause() {
    this.paused = true;
  }

  public resume() {
    this.paused = false;
  }

  get isEnabled() {
    return this.enabled;
  }

  public init(camera: ThCamera, canvas: HTMLElement) {
    // console.log('Add camera to raycaster', camera);
    if (this.canvas && this.canvas !== canvas) {
      this.unsubscribe();
    }
    this.camera = camera;
    this.canvas = canvas;
    this.subscribe();
  }

  public addEventTarget(target: RaycasterEventDirective) {
    // console.log('RaycasterService.addGroup', group.name, group);
    this.groups.push(target);
  }

  public removeEventTarget(target: RaycasterEventDirective) {
    const index = this.groups.indexOf(target);
    if (index >= 0) {
      this.groups.splice(index, 1);
    }
  }

  private onPointerMove(event: any /*MouseEvent  & { layerX: number, layerY: number}*/) {
    if (!this.isReady()) {
      return;
    }
    // pointermove can fire much more often than the display refreshes:
    // only remember the latest position and raycast once per animation frame
    this.pendingMove = { x: event.layerX, y: event.layerY };
    if (this.moveFrameId === undefined) {
      this.moveFrameId = requestAnimationFrame(() => {
        this.moveFrameId = undefined;
        const move = this.pendingMove;
        this.pendingMove = undefined;
        if (move && this.isReady()) {
          this.processPointerMove(move.x, move.y);
        }
      });
    }
  }

  private cancelPendingMove() {
    if (this.moveFrameId !== undefined) {
      cancelAnimationFrame(this.moveFrameId);
      this.moveFrameId = undefined;
    }
    this.pendingMove = undefined;
  }

  private processPointerMove(x: number, y: number) {
    const i = this.getFirstIntersectedGroup(x, y, [RaycasterEvent.mouseEnter])[RaycasterEvent.mouseEnter];
    if (this.selected && this.selected === i?.target) {
      return;
    }
    const previous = this.selected;
    this.selected = i?.target ?? null;
    if (!previous && !this.selected) {
      return;
    }
    this.ngZone.run(() => {
      if (previous) {
        previous.host.objRef?.dispatchEvent({
          type: RaycasterEvent.mouseExit,
          component: previous.host,
        });
        previous.emitOnMouseExit();
      }
      const target = i?.target;
      if (i && target) {
        const evt = {
          type: RaycasterEvent.mouseEnter,
          component: target.host,
          ...i,
        };
        target.host.objRef?.dispatchEvent(evt);
        target.emitOnMouseEnter(evt);
      }
    });
  }

  private onPointerDown(event: PointerEvent) {
    this.maxClickDistance = event.width;
    this.pointerDownEvent = event;

    if (!this.isReady()) {
      return;
    }

    const i = this.getFirstIntersectedGroup((event as any).layerX, (event as any).layerY, [
      RaycasterEvent.pointerDown,
    ])[RaycasterEvent.pointerDown];
    const target = i?.target;
    if (i && target && target.host.objRef) {
      const evt = { type: RaycasterEvent.pointerDown, component: target.host, ...i };
      this.ngZone.run(() => {
        target.host.objRef?.dispatchEvent(evt);
        target.emitOnPointerDown(evt);
      });
    }
  }

  private onPointerUp(event: PointerEvent) {
    const downEvent = this.pointerDownEvent;
    this.pointerDownEvent = undefined;

    if (!this.isReady()) {
      return;
    }

    const isClick = this.calcPointerDownUpDinstance(event, downEvent) <= this.maxClickDistance;
    // pointer up and click share a single raycast
    const events: (keyof RaycasterEventMap)[] = isClick
      ? [RaycasterEvent.pointerUp, RaycasterEvent.click]
      : [RaycasterEvent.pointerUp];
    const hits = this.getFirstIntersectedGroup((event as any).layerX, (event as any).layerY, events);
    const up = hits[RaycasterEvent.pointerUp];
    const click = hits[RaycasterEvent.click];
    if (!up?.target?.host.objRef && !click?.target?.host.objRef) {
      return;
    }

    this.ngZone.run(() => {
      // pointer up
      const upTarget = up?.target;
      if (up && upTarget && upTarget.host.objRef) {
        const evt = { type: RaycasterEvent.pointerUp, component: upTarget.host, ...up };
        upTarget.host.objRef.dispatchEvent(evt);
        upTarget.emitOnPointerUp(evt);
      }

      // click
      const clickTarget = click?.target;
      if (click && clickTarget && clickTarget.host.objRef) {
        const evt = { type: RaycasterEvent.click, component: clickTarget.host, ...click };
        clickTarget.host.objRef.dispatchEvent(evt);
        clickTarget.emitOnClick(evt);
      }
    });
  }

  private isReady(ignorePaused?: boolean): boolean {
    return !!(
      this.enabled &&
      (ignorePaused || !this.paused) &&
      this.camera &&
      this.camera.objRef &&
      this.groups &&
      this.groups.length > 0
    );
  }

  private calcPointerDownUpDinstance(upEvent: PointerEvent, downEvent?: PointerEvent) {
    if (!downEvent) {
      return Number.MAX_VALUE;
    }
    const xDist = (upEvent as any).layerX - (downEvent as any).layerX;
    const yDist = (upEvent as any).layerY - (downEvent as any).layerY;
    return Math.sqrt(xDist * xDist + yDist * yDist);
  }

  /**
   * Raycasts once and returns, for every requested event, the nearest group listening to that event.
   * Every group is intersected at most once, even if it listens to several of the requested events.
   */
  private getFirstIntersectedGroup(
    x: number,
    y: number,
    events: (keyof RaycasterEventMap)[],
  ): Partial<Record<keyof RaycasterEventMap, NearestIntersection>> {
    const result: Partial<Record<keyof RaycasterEventMap, NearestIntersection>> = {};
    if (!this.camera || !this.canvas || !this.camera.objRef) {
      return result;
    }
    pointerVector.set((x / this.canvas.clientWidth) * 2 - 1, -(y / this.canvas.clientHeight) * 2 + 1);
    this.raycaster.setFromCamera(pointerVector, this.camera.objRef);

    // loop across all groups. Try to find the group with nearest distance (per event).
    const nearest: Partial<
      Record<keyof RaycasterEventMap, { hit: THREE.Intersection; group: RaycasterEventDirective }>
    > = {};
    for (const group of this.groups) {
      const obj = group.host.objRef;
      if (!obj || !events.some((e) => group[e])) {
        continue;
      }
      const hit = this.raycaster.intersectObject(obj, true)[0];
      if (!hit) {
        continue;
      }
      for (const e of events) {
        const current = nearest[e];
        if (group[e] && (!current || current.hit.distance > hit.distance)) {
          nearest[e] = { hit, group };
        }
      }
    }

    for (const e of events) {
      const n = nearest[e];
      if (n) {
        result[e] = { target: n.group, ...n.hit };
      }
    }
    return result;
  }
}
