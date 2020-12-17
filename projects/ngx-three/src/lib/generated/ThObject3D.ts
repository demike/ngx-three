
        import { Object3D } from 'three';
        import { Component, ChangeDetectionStrategy } from '@angular/core';
        import { ThObject3D } from './ThObject3D';
        import { ThArgs } from '../ThArgs';
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
          
      @Input("up")
      public set up( value: any ) {
        this.obj.up = value;
      }
      
      @Input("position")
      public set position( value: any ) {
        this.obj.position = value;
      }
      
      @Input("rotation")
      public set rotation( value: any ) {
        this.obj.rotation = value;
      }
      
      @Input("quaternion")
      public set quaternion( value: any ) {
        this.obj.quaternion = value;
      }
      
      @Input("scale")
      public set scale( value: any ) {
        this.obj.scale = value;
      }
      
      @Input("modelViewMatrix")
      public set modelViewMatrix( value: any ) {
        this.obj.modelViewMatrix = value;
      }
      
      @Input("normalMatrix")
      public set normalMatrix( value: any ) {
        this.obj.normalMatrix = value;
      }
      
      @Input("matrix")
      public set matrix( value: any ) {
        this.obj.matrix = value;
      }
      
      @Input("matrixWorld")
      public set matrixWorld( value: any ) {
        this.obj.matrixWorld = value;
      }
      
      @Input("layers")
      public set layers( value: any ) {
        this.obj.layers = value;
      }
      
      @Input("DefaultUp")
      public set DefaultUp( value: any ) {
        this.obj.DefaultUp = value;
      }
      
          
        }
        