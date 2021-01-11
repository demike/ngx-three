import {
  AfterViewInit,
  Directive,
  EventEmitter,
  Host,
  OnDestroy,
  Output,
} from '@angular/core';
import { Event } from 'three';
import { ThObject3D } from '../generated/ThObject3D';

import { RaycasterService } from './raycaster.service';

export interface RaycasterEmitEvent {
  component: ThObject3D;
  face?: THREE.Face3;
}

@Directive({ selector: '[onClick], [onMouseEnter], [onMouseExit]' })
export class RaycasterEventDirective implements AfterViewInit, OnDestroy {
  @Output('onMouseEnter') mouseEnter = new EventEmitter<RaycasterEmitEvent>();
  @Output('onMouseExit') mouseExit = new EventEmitter<RaycasterEmitEvent>();
  @Output('onClick') click = new EventEmitter<RaycasterEmitEvent>();

  constructor(
    @Host() public readonly host: ThObject3D,
    private raycasterService: RaycasterService
  ) {
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseExit = this.onMouseExit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  ngAfterViewInit(): void {
    this.subscribeEvents();
  }

  private subscribeEvents() {
    this.raycasterService.addEventTarget(this);
    /*
    const obj = this.host.obj;
    // TODO: addEventListener, removeEventListener for proxy
    if (this.mouseEnter.observers.length > 0) {
      obj.addEventListener(RaycasterEvent.mouseEnter, this.onMouseEnter);
    }
    if (this.mouseExit.observers.length > 0) {
      obj.addEventListener(RaycasterEvent.mouseExit, this.onMouseExit);
    }
    if (this.click.observers.length > 0) {
      obj.addEventListener(RaycasterEvent.click, this.onClick);
    }
    */
  }

  private unSubscribeEvents() {
    /*
    const obj = this.host.obj;
    if (obj) {
      obj.removeEventListener(RaycasterEvent.mouseEnter, this.onMouseEnter);
      obj.removeEventListener(RaycasterEvent.mouseExit, this.onMouseExit);
      obj.removeEventListener(RaycasterEvent.click, this.onClick);
    }
    */
    this.raycasterService.removeEventTarget(this);
  }

  public onMouseExit() {
    this.mouseExit.emit({
      component: this.host,
    });
  }

  public onMouseEnter(event: Event) {
    // console.log('RaycasterGroupDirective.onMouseEnter', event);
    this.mouseEnter.emit({
      component: this.host,
      face: event.face,
    });
  }

  public onClick(event: Event) {
    // console.log('onClick', event);
    this.click.emit({
      component: this.host,
      face: event.face,
    });
  }

  ngOnDestroy(): void {
    this.unSubscribeEvents();
  }
}
