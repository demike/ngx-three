# NgxThree [![npm version](https://badge.fury.io/js/ngx-three.svg)](https://badge.fury.io/js/ngx-three) ![Build](https://github.com/demike/ngx-three/actions/workflows/.github/workflows/ci-cd.yml/badge.svg)

NgxThree wraps [three.js](https://threejs.org/) in Angular components.
It allows to render 3d Scenes in a declarative way. And you can leverage
the angular features and ecosystem your are familiar with.

## What's in the box
ngx-three uses code generation to be able to provide as much functionality from three js.
This approach makes it possible to follow three.js updates with minimal effort.

ngx-three:
- generates wrappers (> 130) for three.js class categories:
  - Object3d,
  - Material,
  - Geometry,
  - Post processing passes,
  - Controls 
- Adds support for simple pointer event handling
- Easy handling of async model loading
- Supports Multi-View / Multi-Scene scenarios
- enables declarative post processing 
- ...

The project is inspired by the great [react three fiber](https://github.com/pmndrs/react-three-fiber) library.
But in contrast to RTF angular components are generated that wrap three.js classes.

## Performance

From a performance perspective it's important to know, that ngx-three components
do not produce any DOM elements. 

In addition the generate classes use OnPush change detection strategy
and the scene rendering runs outside the angular zone.

This means there is no overhead because of additional DOM elements and the impact of angular's change detection 
mechanism should be minimized.

# Installation

```
npm install ngx-three
```

In addition to ngx-three you have to install it's peer dependencies
Angular ([setup howto](https://angular.io/guide/setup-local)), three.js and its typings
```
npm install three
npm install @types/three"
```

You can use npm to get the exact peer dependency versions for ngx-three
```
npm info ngx-three peerDependencies
```
### Introductory Example

Check out some [examples](https://demike.github.io/ngx-three/)

!!! WORK IN PROGRESS !!!
# Canvas / View / Scene
TODO

# Objects / Meshes

In three.js anything that can be added to a Scene is an `Object3D`.
In ngx-three the component `ThObject3D` with the tag `th-object3D` can be seen as the
equivalent.

A mesh (`Three.Mesh`) can be represented by `th-mesh` in ngx-three.
A mesh can have a material (`ThMaterial`) and a Geometry(`ThGeometry`).

```html
<th-mesh>
  <th-boxGeometry></th-boxGeometry>
  <th-meshBasicMaterial></th-meshBasicMaterial>
</th-mesh>
```

Every ngx-three object has a membery called
`objRef` this one holds the reference to the
three.js object.
For example `ThMesh` has a member `objRef: THREE.Mesh`.

<!-- TODO: GO ON -->

## Referencing objects in a component
There are two ways to reference existing ngx-three object
class instances.

### 1) ViewChild
You can use ViewChild to reference template objects
from within the component code.

```typescript
@Component({
  selector: 'app-myapp',
  template: ` <th-mesh></th-mesh> `,
})
export class MyApp {
  @ViewChild(ThMesh, { static: true }) mesh: ThMesh;
}

```

### 2) Angular Template Variables
Referencing ngx-three objects (`th-object3D`) can be
easiliy referenced from within the template by means
of template variables

```html
<th-mesh>
  <th-boxGeometry #theGeo></th-boxGeometry>
</th-mesh>
<th-mesh>
  <th-material [objRef]="theGeo.objRef"></th-material>
  <th-meshBasicMaterial></th-meshBasicMaterial>
</th-mesh>
```


## How to put existing Three.Object3D objects into the angular template
If you want to put an existing object into the angular component tree
(maybe it was easier to construct the specific object in an imperative way)
this can be easily achieved by setting the `objRef` Attribute
```
<th-object3D [objRef]="existingObj"></th-object3D>
```


# Model Loading
ngx-three provides an easy way to load models / scenes and apply it
to a `th-object3D` element.


## GLTF Loader
Loading GLTF / GLB files can be achieved
by using the `loadGLTF` directive.

```html
<th-object3D 
    loadGLTF
    url="assets/helmet.glb"
    >
</th-object3D>
```

You can find an example [here](https://demike.github.io/ngx-three/loader-example)

## Generic Loader

In addition to the pre-defined loaders it is possible use the generic loader and define a loader function
that actually does the parsing then.
All the specific loaders are actually using the generic loader and provide their own loader function.

The below example shows how to implement simple  'obj' loading
```html
<th-object3D 
    load
    url="assets/helmet.obj"
    [loaderFN]="loadObj"
    >
</th-object3D>
```
with

```typescript
...

public loadObj = async (
    input?: string,
    onProgress?: (progress: ProgressEvent) => void,
    onLoaded?: (result: Group) => void
  ): Promise<Object3D> => {
    if (!input) {
      throw new Error('missing input url');
    }

    const loader = new ObjLoader();
    const result: Group = await loader.loadAsync(input, onProgress);

    if (onLoaded) {
      onLoaded(result);
    }

    return result;
  };
}
```



## Caching Models

to enable loader caching you can use three.js' built in [cache](https://threejs.org/docs/#api/en/loaders/Cache):

```typescript
THREE.Cache.enabled = true;
```


# Event Handling

## Mouse Events
ngx-three supports the following mouse/pointer events:
- onClick
- onMouseEnter 
- onMouseExit

All of them return a [RaycasterEmitEvent](./projects/ngx-three/src/lib/events/raycaster.events.directive.ts#L7)

## Object 3D Events
Every `th-object3D` element emits property changes.
you can listen to it like this:
```
<th-object3D (onUpdate)="doSomething($event)></th-object3D>
```
[Events Example](https://demike.github.io/ngx-three/events-example) 

