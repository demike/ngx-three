/* eslint-disable @typescript-eslint/naming-convention */
import * as THREE from 'three';
import { OmitByValue } from 'utility-types';

type Three = typeof import('three');

/** Classes exported `three/src/Three.d.ts` but not from `three/src/Three.js` */
type MissingInThreeRuntimeExports =
  | THREE.AnimationAction
  | THREE.DirectGeometry
  | THREE.WebGLClipping
  | THREE.WebGLInfo
  | THREE.WebGLProperties
  | THREE.WebGLRenderList
  | THREE.WebGLRenderLists
  | THREE.WebGLColorBuffer
  | THREE.WebGLDepthBuffer
  | THREE.WebGLStencilBuffer;

type InterestingThreeExports = OmitByValue<Three, MissingInThreeRuntimeExports | THREE.BufferAttribute>;

export { OmitByValue };

// 3D objects

// TODO fix these types
type __ngxThreeObjects = {
  [P in keyof InterestingThreeExports]: Three[P] extends new (...args: any) => any
    ? InstanceType<Three[P]> extends InstanceType<Three['Object3D']>
      ? InstanceType<Three[P]>
      : /*
      : InstanceType<Three[P]> extends InstanceType<Three['Geometry']>
      ? InstanceType<Three[P]>
      : InstanceType<Three[P]> extends InstanceType<Three['BufferGeometry']>
      ? InstanceType<Three[P]>
      : InstanceType<Three[P]> extends InstanceType<Three['Material']>
      ? InstanceType<Three[P]>
      : InstanceType<Three[P]>
      */
        never
    : never;
};

export type NgxThreeObjects = OmitByValue<__ngxThreeObjects, never>;

type __ngxThreeMaterials = {
  [P in keyof InterestingThreeExports]: Three[P] extends new (...args: any) => any
    ? InstanceType<Three[P]> extends InstanceType<Three['Material']>
      ? InstanceType<Three[P]>
      : never
    : never;
};

// materials

export type NgxThreeMaterials = OmitByValue<__ngxThreeMaterials, never>;

type __ngxThreeGeometries = {
  [P in keyof InterestingThreeExports]: Three[P] extends new (...args: any) => any
    ? InstanceType<Three[P]> extends InstanceType<Three['Geometry']>
      ? InstanceType<Three[P]>
      : never
    : never;
};

// geometries
export type NgxThreeGeometries = OmitByValue<__ngxThreeGeometries, never>;

type __ngxThreeBufferGeometries = {
  [P in keyof InterestingThreeExports]: Three[P] extends new (...args: any) => any
    ? InstanceType<Three[P]> extends InstanceType<Three['BufferGeometry']>
      ? InstanceType<Three[P]>
      : never
    : never;
};

export type NgxThreeBufferGeometries = OmitByValue<__ngxThreeBufferGeometries, never>;

// controls

type Controls = typeof import('./control_types');
type __ngxControls = {
  [P in keyof Controls]: InstanceType<Controls[P]>;
};
export type NgxThreeControls = OmitByValue<__ngxControls, never>;
