import { AfterViewInit, Directive, EventEmitter, Host, OnDestroy, Output } from '@angular/core';
import { Event } from 'three';
import { ThObject3D } from '../generated/ThObject3D';

import { RaycasterService } from './raycaster.service';

export interface RaycasterEmitEvent {
  component: ThObject3D;
  face?: THREE.Face;
}

@Directive({ selector: '[onClick], [onMouseEnter], [onMouseExit], [onPointerDown], [onPointerUp]' })
export class RaycasterEventDirective implements AfterViewInit, OnDestroy {

  @Output() get onMouseEnter(): EventEmitter<RaycasterEmitEvent> {
    if(!this.mouseEnter) {
      this.mouseEnter = new EventEmitter<RaycasterEmitEvent>();
    }
    return this.mouseEnter;
  }
  protected mouseEnter?: EventEmitter<RaycasterEmitEvent>;


  @Output() get onMouseExit(): EventEmitter<RaycasterEmitEvent> {
    if(!this.mouseExit) {
      this.mouseExit = new EventEmitter<RaycasterEmitEvent>();
    }
    return this.mouseExit;
  }
  protected mouseExit?: EventEmitter<RaycasterEmitEvent>;


  @Output() get onClick(): EventEmitter<RaycasterEmitEvent> {
    if(!this.click) {
      this.click = new EventEmitter<RaycasterEmitEvent>();
    }
    return this.click;
  }
  protected click?: EventEmitter<RaycasterEmitEvent>;


  @Output() get onPointerDown(): EventEmitter<RaycasterEmitEvent> {
    if(!this.pointerDown) {
      this.pointerDown = new EventEmitter<RaycasterEmitEvent>();
    }
    return this.pointerDown;
  }
  protected pointerDown?: EventEmitter<RaycasterEmitEvent>;

  @Output() get onPointerUp(): EventEmitter<RaycasterEmitEvent> {
    if(!this.pointerUp) {
      this.pointerUp = new EventEmitter<RaycasterEmitEvent>();
    }
    return this.pointerUp;
  }
  protected pointerUp?: EventEmitter<RaycasterEmitEvent>;

  constructor(@Host() public readonly host: ThObject3D, private raycasterService: RaycasterService) {
    this.emitOnMouseEnter = this.emitOnMouseEnter.bind(this);
    this.emitOnMouseExit = this.emitOnMouseExit.bind(this);
    this.emitOnClick = this.emitOnClick.bind(this);
  }

  ngAfterViewInit(): void {
    this.subscribeEvents();
  }

  private subscribeEvents() {
    this.raycasterService.addEventTarget(this);
  }

  private unSubscribeEvents() {
    this.raycasterService.removeEventTarget(this);
  }

  public emitOnMouseExit() {
    this.mouseExit?.emit({
      component: this.host
    });
  }

  public emitOnMouseEnter(event: Event) {
    // console.log('RaycasterGroupDirective.onMouseEnter', event);
    this.mouseEnter?.emit({
      component: this.host,
      face: event.face
    });
  }

  public emitOnClick(event: Event) {
    // console.log('onClick', event);
    this.click?.emit({
      component: this.host,
      face: event.face
    });
  }

  public emitOnPointerDown(event: Event) {
    // console.log('onClick', event);
    this.pointerDown?.emit({
      component: this.host,
      face: event.face
    });
  }

  public emitOnPointerUp(event: Event) {
    // console.log('onClick', event);
    this.pointerUp?.emit({
      component: this.host,
      face: event.face
    });
  }

  ngOnDestroy(): void {
    this.unSubscribeEvents();
  }
}
