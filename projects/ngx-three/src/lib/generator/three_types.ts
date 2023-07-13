/* eslint-disable @typescript-eslint/naming-convention */
import * as THREE from 'three';
import { OmitByValue } from 'utility-types';

type Three = typeof import('three');

/** Classes exported `three/src/Three.d.ts` but not from `three/src/Three.js` */
type MissingInThreeRuntimeExports =
  | THREE.AnimationAction
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

// ------ 3D objects ------

type __ngxThreeObjects = {
  [P in keyof InterestingThreeExports]: Three[P] extends abstract new (...args: any) => any
    ? InstanceType<Three[P]> extends InstanceType<Three['Object3D']>
      ? InstanceType<Three[P]>
      : never
    : never;
};

// renderer extra types
type ExtraObjects = typeof import('./object_extra_types');
type __ngxThreeExtraObjects = {
  [O in keyof ExtraObjects]: ExtraObjects[O] extends abstract new (...args: any) => any
    ? InstanceType<ExtraObjects[O]> extends InstanceType<Three['Object3D']>
      ? InstanceType<ExtraObjects[O]>
      : never
    : never;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NgxThreeObjects extends OmitByValue<__ngxThreeObjects & __ngxThreeExtraObjects, never> {}

// ------ materials ------

type __ngxThreeMaterials = {
  [P in keyof InterestingThreeExports]: Three[P] extends abstract new (...args: any) => any
    ? InstanceType<Three[P]> extends InstanceType<Three['Material']>
      ? InstanceType<Three[P]>
      : never
    : never;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NgxThreeMaterials extends OmitByValue<__ngxThreeMaterials, never> {}

// ------ geometries ------

type __ngxThreeBufferGeometries = {
  [P in keyof InterestingThreeExports]: Three[P] extends abstract new (...args: any) => any
    ? InstanceType<Three[P]> extends InstanceType<Three['BufferGeometry']>
      ? InstanceType<Three[P]>
      : never
    : never;
};

type ExtraGeomtries = typeof import('./geometry_extra_types');
type __ngxThreeExtraGeometries = {
  [G in keyof ExtraGeomtries]: ExtraGeomtries[G] extends abstract new (...args: any) => any
    ? InstanceType<ExtraGeomtries[G]> extends InstanceType<Three['BufferGeometry']>
      ? InstanceType<ExtraGeomtries[G]>
      : never
    : never;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NgxThreeBufferGeometries
  extends OmitByValue<__ngxThreeBufferGeometries & __ngxThreeExtraGeometries, never> {}

// ------ textures -----

type __ngxThreeTextures = {
  [P in keyof InterestingThreeExports]: Three[P] extends abstract new (...args: any) => any
    ? InstanceType<Three[P]> extends InstanceType<Three['Texture']>
      ? InstanceType<Three[P]>
      : never
    : never;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NgxThreeTextures extends OmitByValue<__ngxThreeTextures, never> {}

// ------ controls ------

type Controls = typeof import('./control_types');
type __ngxControls = {
  [P in keyof Controls]: InstanceType<Controls[P]>;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NgxThreeControls extends OmitByValue<__ngxControls, never> {}

// ------ post processing passes ------

import * as PP from './pass_types';
type Passes = typeof PP;
type __ngxPasses = {
  [P in keyof Passes]: Passes[P] extends abstract new (...args: any) => any ? InstanceType<Passes[P]> : never;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NgxThreePasses extends OmitByValue<__ngxPasses, never> {}
