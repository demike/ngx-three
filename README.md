# NgxThree [![npm version](https://badge.fury.io/js/ngx-three.svg)](https://badge.fury.io/js/ngx-three) ![Build](https://github.com/demike/ngx-three/actions/workflows/.github/workflows/ci-cd.yml/badge.svg)

NgxThree wraps [three.js](https://threejs.org/) in Angular components.
It allows to render 3d Scenes in a declarative way.

it uses code generation to be able to provide as much functionality from three js.
This approach makes it possible to follow three.js updates with minimal effort.

The project is inspired by the great [react three fiber](https://github.com/pmndrs/react-three-fiber) library.

Check out some [examples](https://demike.github.io/ngx-three/)

!!! WORK IN PROGRESS !!!
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

## Model Loading
ngx-three provides an easy way to load models / scenes and apply it
to a `th-object3D` element.


### GLTF Loader
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

### Generic Loader

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



### Caching Models

to enable loader caching you can use three.js' built in [cache](https://threejs.org/docs/#api/en/loaders/Cache):

```typescript
THREE.Cache.enabled = true;
```


## Event Handling

### Mouse Events
ngx-three supports the following mouse/pointer events:
- onClick
- onMouseEnter 
- onMouseExit

All of them return a [RaycasterEmitEvent](./projects/ngx-three/src/lib/events/raycaster.events.directive.ts#L7)

### Object 3D Events
Every `th-object3D` element emits property changes.
you can listen to it like this:
```
<th-object3D (onUpdate)="doSomething($event)></th-object3D>
```
[Events Example](https://demike.github.io/ngx-three/events-example) 

