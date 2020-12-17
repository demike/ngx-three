
        import { Object3D } from 'three';
        import { Component, ChangeDetectionStrategy } from '@angular/core';
        import { ThObject3D } from './ThObject3D';
        import { applyValue } from '../util';
        import { Input } from '@angular/core';import { SkipSelf, Self, Optional, forwardRef, Type } from '@angular/core';import { Vector3 } from 'three';import { Euler } from 'three';import { Quaternion } from 'three';import { Matrix4 } from 'three';import { Matrix3 } from 'three';import { Layers } from 'three';import { WebGLRenderer } from 'three';import { Scene } from 'three';import { Camera } from 'three';import { Geometry } from 'three';import { Material } from 'three';import { Group } from 'three';import { Raycaster } from 'three';import { EventDispatcher } from 'three';import { BufferGeometry } from 'three';import { Intersection } from 'three';import { AnimationClip } from 'three';import { ThWrapperBase } from '../ThWrapperBase'import { ThEventDispatcher } from './ThEventDispatcher';
    
        @Component({
          selector: "th-object3D",
          inputs: ["id","uuid","name","type","parent","children","matrixAutoUpdate","matrixWorldNeedsUpdate","visible","castShadow","receiveShadow","frustumCulled","renderOrder","animations","userData","customDepthMaterial","customDistanceMaterial","isObject3D","onBeforeRender","onAfterRender","DefaultMatrixAutoUpdate",],
          template: "",
          changeDetection: ChangeDetectionStrategy.OnPush,
          providers: [{provide: ThObject3D, useExisting: forwardRef(() => ThObject3D)}]
        })
        export class ThObject3D<TARGS extends any[] = []> extends ThWrapperBase<TARGS>  extends ThEventDispatcher<TARGS> {
          protected obj!: Object3D;
          protected getObjectType(): Type<Object3D> { return Object3D};
          
    @Input()
    public set up( value: Vector3| [x: number,y: number,z: number]) {
        if(this.obj) {
         this.obj.up = applyValue<Vector3>(this.obj.up, value);
        }
      }
    @Input()
    public set position( value: Vector3| [x: number,y: number,z: number]) {
        if(this.obj) {
         this.obj.position = applyValue<Vector3>(this.obj.position, value);
        }
      }
    @Input()
    public set rotation( value: Euler| [x: number,y: number,z: number,order?: string]) {
        if(this.obj) {
         this.obj.rotation = applyValue<Euler>(this.obj.rotation, value);
        }
      }
    @Input()
    public set quaternion( value: Quaternion| [x: number,y: number,z: number,w: number]) {
        if(this.obj) {
         this.obj.quaternion = applyValue<Quaternion>(this.obj.quaternion, value);
        }
      }
    @Input()
    public set scale( value: Vector3| [x: number,y: number,z: number]) {
        if(this.obj) {
         this.obj.scale = applyValue<Vector3>(this.obj.scale, value);
        }
      }
    @Input()
    public set modelViewMatrix( value: Matrix4| [n11: number,n12: number,n13: number,n14: number,n21: number,n22: number,n23: number,n24: number,n31: number,n32: number,n33: number,n34: number,n41: number,n42: number,n43: number,n44: number]) {
        if(this.obj) {
         this.obj.modelViewMatrix = applyValue<Matrix4>(this.obj.modelViewMatrix, value);
        }
      }
    @Input()
    public set normalMatrix( value: Matrix3| [n11: number,n12: number,n13: number,n21: number,n22: number,n23: number,n31: number,n32: number,n33: number]) {
        if(this.obj) {
         this.obj.normalMatrix = applyValue<Matrix3>(this.obj.normalMatrix, value);
        }
      }
    @Input()
    public set matrix( value: Matrix4| [n11: number,n12: number,n13: number,n14: number,n21: number,n22: number,n23: number,n24: number,n31: number,n32: number,n33: number,n34: number,n41: number,n42: number,n43: number,n44: number]) {
        if(this.obj) {
         this.obj.matrix = applyValue<Matrix4>(this.obj.matrix, value);
        }
      }
    @Input()
    public set matrixWorld( value: Matrix4| [n11: number,n12: number,n13: number,n14: number,n21: number,n22: number,n23: number,n24: number,n31: number,n32: number,n33: number,n34: number,n41: number,n42: number,n43: number,n44: number]) {
        if(this.obj) {
         this.obj.matrixWorld = applyValue<Matrix4>(this.obj.matrixWorld, value);
        }
      }
    @Input()
    public set layers( value: Layers| [channel: number]) {
        if(this.obj) {
         this.obj.layers = applyValue<Layers>(this.obj.layers, value);
        }
      }
    @Input()
    public set DefaultUp( value: Vector3| [x: number,y: number,z: number]) {
        if(this.obj) {
         this.obj.DefaultUp = applyValue<Vector3>(this.obj.DefaultUp, value);
        }
      }
          
        }
        