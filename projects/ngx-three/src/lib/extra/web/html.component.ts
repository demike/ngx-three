/**
 * The following code is ported from pmndrs/drei and adapted to work with Angular and ngx-three
 * Many thanks to pmndrs/drei at its contributors!
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  Camera,
  DoubleSide,
  Group,
  Matrix4,
  Object3D,
  OrthographicCamera,
  PerspectiveCamera,
  Raycaster,
  Vector2,
  Vector3,
} from 'three';
import { RAYCASTER } from '../../events/raycaster.service';
import { ThGroup, ThObject3D } from '../../generated';
import { NgChanges } from '../../util';
import { ThView } from '../../ThView';

const v1 = new Vector3();
const v2 = new Vector3();
const v3 = new Vector3();

function defaultCalculatePosition(el: Object3D, camera: Camera, size: { width: number; height: number }) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
  objectPos.project(camera);
  const widthHalf = size.width / 2;
  const heightHalf = size.height / 2;
  return [objectPos.x * widthHalf + widthHalf, -(objectPos.y * heightHalf) + heightHalf];
}

export type CalculatePosition = typeof defaultCalculatePosition;

function isObjectBehindCamera(el: Object3D, camera: Camera) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
  const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
  const deltaCamObj = objectPos.sub(cameraPos);
  const camDir = camera.getWorldDirection(v3);
  return deltaCamObj.angleTo(camDir) > Math.PI / 2;
}

function isObjectVisible(el: Object3D, camera: Camera, raycaster: Raycaster, occlude: Object3D[]) {
  const elPos = v1.setFromMatrixPosition(el.matrixWorld);
  const screenPos = elPos.clone();
  screenPos.project(camera);
  raycaster.setFromCamera(screenPos as unknown as Vector2, camera);
  const intersects = raycaster.intersectObjects(occlude, true);
  if (intersects.length) {
    const intersectionDistance = intersects[0].distance;
    const pointDistance = elPos.distanceTo(raycaster.ray.origin);
    return pointDistance < intersectionDistance;
  }
  return true;
}

function objectScale(el: Object3D, camera: Camera) {
  if (camera instanceof OrthographicCamera) {
    return camera.zoom;
  } else if (camera instanceof PerspectiveCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const vFOV = (camera.fov * Math.PI) / 180;
    const dist = objectPos.distanceTo(cameraPos);
    const scaleFOV = 2 * Math.tan(vFOV / 2) * dist;
    return 1 / scaleFOV;
  } else {
    return 1;
  }
}

function objectZIndex(el: Object3D, camera: Camera, zIndexRange: Array<number>) {
  if (camera instanceof PerspectiveCamera || camera instanceof OrthographicCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const dist = objectPos.distanceTo(cameraPos);
    const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
    const B = zIndexRange[1] - A * camera.far;
    return Math.round(A * dist + B);
  }
  return undefined;
}

const epsilon = (value: number) => (Math.abs(value) < 1e-10 ? 0 : value);

function getCSSMatrix(matrix: Matrix4, multipliers: number[], prepend = '') {
  let matrix3d = 'matrix3d(';
  for (let i = 0; i !== 16; i++) {
    matrix3d += epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? ',' : ')');
  }
  return prepend + matrix3d;
}

const getCameraCSSMatrix = (
  (multipliers: number[]) => (matrix: Matrix4) =>
    getCSSMatrix(matrix, multipliers)
)([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]);

const getObjectCSSMatrix = (
  (scaleMultipliers: (n: number) => number[]) => (matrix: Matrix4, factor: number) =>
    getCSSMatrix(matrix, scaleMultipliers(factor), 'translate(-50%,-50%)')
)((f: number) => [1 / f, 1 / f, 1 / f, 1, -1 / f, -1 / f, -1 / f, -1, 1 / f, 1 / f, 1 / f, 1, 1, 1, 1, 1]);

type PointerEventsProperties =
  | 'auto'
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | 'inherit';

/**
 * A port of the pmndrs/drei Html component
 *
 * Add Html content to any three.js object3d node
 */
@Component({
  selector: 'th-html',
  templateUrl: './html.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlComponent extends ThGroup<Group> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  protected readonly DoubleSide = DoubleSide;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  protected readonly FRAGMENT_SHADER = FRAGMENT_SHADER;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  protected readonly VERTEX_SHADER = VERTEX_SHADER;

  @Input() prepend = false; // Project content behind the canvas (default: false)
  @Input() center = false; // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
  @Input() fullscreen = false; // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
  eps = 0.001;
  @Input() portal?: HTMLElement; // Reference to target container (default=undefined)
  /* If set (default: undefined), children will be scaled by
   * this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
   */
  @Input() distanceFactor?: number;
  @Input() sprite = false; // Renders as sprite, but only in transform mode (default=false)
  @Input() transform = false; // If true, applies matrix3d transformations (default=false)
  @Input() zIndexRange: [number, number] = [16777271, 0]; // Z-order range (default=[16777271, 0])

  @Input() style?: Partial<CSSStyleDeclaration>;
  @Input() className?: string;

  // Occlusion based off work by Jerome Etienne and James Baicoianu
  // https://www.youtube.com/watch?v=ScZcUEDGjJI
  // as well as Joe Pea in CodePen: https://codepen.io/trusktr/pen/RjzKJx
  @Input() occlude?: Object3D[] | ThObject3D[] | boolean;
  @Output()
  public onOcclude = new EventEmitter<boolean>();

  /**
   * Override default positioning function. [ignored in transform mode]
   */
  @Input() calculatePosition: CalculatePosition = defaultCalculatePosition;
  @Input() as = 'div'; // Wrapping element (default: 'div')
  @Input() wrapperClass?: string; // The className of the wrapping element (default: undefined)
  @Input() pointerEvents: PointerEventsProperties = 'auto';

  protected transformInnerStyles = this.computeInnerStyles();
  protected styles: Record<string, any> | null = null;

  private oldZoom = 0;
  private oldPosition = [0, 0];
  private notOccluded = true;

  @ViewChild('outerRef')
  private transformOuterRef?: ElementRef<HTMLDivElement>;
  @ViewChild('innerRef')
  private transformInnerRef?: ElementRef<HTMLDivElement>;
  private el?: HTMLElement;
  private target?: HTMLElement | null;
  private frameSubscription?: Subscription;
  private raycaster = inject(RAYCASTER);

  constructor(private view: ThView, @SkipSelf() parent: ThObject3D) {
    super(parent);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.styles = this.computeStyles();
  }

  public ngAfterViewInit() {
    this.el = document.createElement(this.as);
    this.frameSubscription = this.view.onRender.subscribe(() => this.onFrame());
    if (this.transformOuterRef) {
      this.el.appendChild(this.transformOuterRef.nativeElement);
    }
    if (this.el && !this.target) {
      this.appendElement(this.el);
    }
  }

  protected onResize() {
    this.styles = this.computeStyles();
  }

  public ngOnChanges(changes: NgChanges<HtmlComponent>): void {
    super.ngOnChanges(changes);
    /*
    if(this.el) {
      if(changes.portal || changes.transform) {
        this.appendElement(this.el);
      }

      if(changes.wrapperClass) {
        this.el.className = changes.wrapperClass.currentValue ?? '';
      }

      if(changes.pointerEvents) {
        this.transformInnerStyles = this.computeInnerStyles();
      }
    }
    */
  }

  private appendElement(el: HTMLElement) {
    if (!this.el || !this.objRef || !this.view.hostElement || !this.view.camera) {
      return;
    }
    this.target = this.portal ?? this.view.hostElement.nativeElement;
    this.view.scene?.objRef?.updateMatrixWorld();
    if (this.transform) {
      el.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;';
    } else {
      const vec = this.calculatePosition(this.objRef, this.view.camera.objRef as Camera, this.getSize());
      el.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`;
    }
    if (this.target) {
      if (this.prepend) {
        this.target.prepend(el);
      } else {
        this.target.appendChild(el);
      }
    }
  }

  public onFrame() {
    const camera = this.view.camera?.objRef as PerspectiveCamera | OrthographicCamera | undefined;
    const scene = this.view.scene?.objRef;
    const group = this._objRef;
    const size = this.getSize();
    if (!camera || !group || !scene || !this.el) {
      return;
    }

    camera.updateMatrixWorld();
    group.updateWorldMatrix(true, false);
    const vec = this.transform ? this.oldPosition : this.calculatePosition(group, camera, size);

    if (
      this.transform ||
      Math.abs(this.oldZoom - camera.zoom) > this.eps ||
      Math.abs(this.oldPosition[0] - vec[0]) > this.eps ||
      Math.abs(this.oldPosition[1] - vec[1]) > this.eps
    ) {
      const isBehindCamera = isObjectBehindCamera(group, camera);
      let raytraceTarget: null | undefined | boolean | Object3D[] = false;
      if (typeof this.occlude === 'boolean') {
        if (this.occlude === true) {
          raytraceTarget = [scene];
        }
      } else if (Array.isArray(this.occlude)) {
        raytraceTarget = this.occlude.map((item) => (item as Partial<ThObject3D>).objRef ?? item) as Object3D[];
      }

      const previouslyVisible = this.notOccluded;
      if (raytraceTarget) {
        this.notOccluded = !isBehindCamera && isObjectVisible(group, camera, this.raycaster, raytraceTarget);
      } else {
        this.notOccluded = !isBehindCamera;
      }

      if (previouslyVisible !== this.notOccluded) {
        if (this.onOcclude.length > 0) {
          this.onOcclude.next(!this.notOccluded);
        } else {
          this.el.style.display = this.notOccluded ? 'block' : 'none';
        }
      }

      this.el.style.zIndex = `${objectZIndex(group, camera, this.zIndexRange)}`;
      if (this.transform) {
        const [widthHalf, heightHalf] = [size.width / 2, size.height / 2];
        const fov = camera.projectionMatrix.elements[5] * heightHalf;
        const { isOrthographicCamera, top, left, bottom, right } = camera as OrthographicCamera;
        const cameraMatrix = getCameraCSSMatrix(camera.matrixWorldInverse);
        const cameraTransform = isOrthographicCamera
          ? `scale(${fov})translate(${epsilon(-(right + left) / 2)}px,${epsilon((top + bottom) / 2)}px)`
          : `translateZ(${fov}px)`;
        let matrix = group.matrixWorld;
        if (this.sprite) {
          matrix = camera.matrixWorldInverse.clone().transpose().copyPosition(matrix).scale(group.scale);
          matrix.elements[3] = matrix.elements[7] = matrix.elements[11] = 0;
          matrix.elements[15] = 1;
        }
        this.el.style.width = size.width + 'px';
        this.el.style.height = size.height + 'px';
        this.el.style.perspective = isOrthographicCamera ? '' : `${fov}px`;
        if (this.transformOuterRef && this.transformInnerRef) {
          // eslint-disable-next-line max-len
          this.transformOuterRef.nativeElement.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`;
          this.transformInnerRef.nativeElement.style.transform = getObjectCSSMatrix(
            matrix,
            1 / ((this.distanceFactor || 10) / 400)
          );
        }
      } else {
        const scale = this.distanceFactor === undefined ? 1 : objectScale(group, camera) * this.distanceFactor;
        this.el.style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`;
      }
      this.oldPosition = vec;
      this.oldZoom = camera.zoom;
    }
  }

  ngOnDestroy(): void {
    this.el?.remove();
    this.frameSubscription?.unsubscribe();
  }

  private computeStyles() {
    const size = this.getSize();
    if (this.transform) {
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        width: size.width + 'px',
        height: size.height + 'px',
        transformStyle: 'preserve-3d',
        pointerEvents: 'none',
      };
    } else {
      return {
        position: 'absolute',
        transform: this.center ? 'translate3d(-50%,-50%,0)' : 'none',
        ...(this.fullscreen && {
          top: -size.height / 2 + 'px',
          left: -size.width / 2 + 'px',
          width: size.width + 'px',
          height: size.height + 'px',
        }),
        ...this.style,
      };
    }
  }

  private computeInnerStyles() {
    return { position: 'absolute', pointerEvents: this.pointerEvents };
  }

  private getSize() {
    return this.view.viewPort ?? this.view.hostElement.nativeElement.getBoundingClientRect() ?? { width: 0, height: 0 };
  }
}

export const VERTEX_SHADER = /* glsl */ `
/*
  This shader is from the THREE's SpriteMaterial.
  We need to turn the backing plane into a Sprite
  (make it always face the camera) if "transfrom" 
  is false. 
*/
#include <common>
void main() {
  vec2 center = vec2(0., 1.);
  float rotation = 0.0;
  
  // This is somewhat arbitrary, but it seems to work well
  // Need to figure out how to derive this dynamically if it even matters
  float size = 0.03;
  vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
  vec2 scale;
  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
  bool isPerspective = isPerspectiveMatrix( projectionMatrix );
  if ( isPerspective ) scale *= - mvPosition.z;
  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;
  gl_Position = projectionMatrix * mvPosition;
}
`;

export const FRAGMENT_SHADER = /* glsl */ `
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}
`;
