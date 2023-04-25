import { AfterViewInit, Directive, EventEmitter, Host, OnDestroy, Output } from '@angular/core';
import { Intersection } from 'three';
import { ThObject3D } from '../generated/ThObject3D';

import { RaycasterEvent, RaycasterService } from './raycaster.service';

export interface RaycasterEmitEvent extends Intersection {
  type: RaycasterEvent;
  component: ThObject3D;
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


  @Output() get onMouseExit(): EventEmitter<{ component: ThObject3D; type: RaycasterEvent}> {
    if(!this.mouseExit) {
      this.mouseExit = new EventEmitter<{ component: ThObject3D; type: RaycasterEvent}>();
    }
    return this.mouseExit;
  }
  protected mouseExit?: EventEmitter<{ component: ThObject3D; type: RaycasterEvent}>;


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
      component: this.host,
      type: RaycasterEvent.mouseExit
    });
  }

  public emitOnMouseEnter(event: RaycasterEmitEvent) {
    // console.log('RaycasterGroupDirective.onMouseEnter', event);
    this.mouseEnter?.emit(event);
  }

  public emitOnClick(event: RaycasterEmitEvent) {
    // console.log('onClick', event);
    this.click?.emit(event);
  }

  public emitOnPointerDown(event: RaycasterEmitEvent) {
    // console.log('onClick', event);
    this.pointerDown?.emit(event);
  }

  public emitOnPointerUp(event: RaycasterEmitEvent) {
    // console.log('onClick', event);
    this.pointerUp?.emit(event);
  }

  ngOnDestroy(): void {
    this.unSubscribeEvents();
  }
}
