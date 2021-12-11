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

Check out some [examples](https://demike.github.io/ngx-three/)

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
# Introductory Example
We are going to create a basic example showing a cube,
with animation and interaction.

## Step 1) Basic Angular Component
Lets start by creating a simple component with an empty template.
```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    template: `
      <!-- Step 2 Content  -->
    `,
  })
  export class ExampleComponent {}
```

## Step 2) Add a Canvas
As a second step we start filling the template with
a canvas and a scene (the most basic setup).


```html
<th-canvas>
  <th-scene>
    <!-- Step 3 Content -->
  </th-scene>
</th-canvas>
```

## Step 3) Adding a Mesh ( The Box )
In this step we are adding a mesh with material and geometry.
You can add material and geometry to the mesh by nesting `th-*Material` and `th-*Geometry` components 
inside a `th-mesh` componet.

By means of the `args` attribute you can pass parameters
to the constructor of the three.js basic material.

```html
<th-mesh>
  <th-boxGeometry></th-boxGeometry>
  <th-meshBasicMaterial [args]="{color: 'purple'}">
  </th-meshBasicMaterial> 
</th-mesh>   
    <!-- Step 4 Content -->
```

## Step 4) Camera and Light
Now lets bring some (ambient)light to the scene.

The perspective camera takes multiple constructor arguments.  
These can be passed to the camera constructor by passing an
an array holding the arguments to `args`.  

The position of the camera is set by means of the `position` attribute.

```html
<th-ambientLight> </th-ambientLight>
<th-perspectiveCamera 
  [args]="[75, 2, 0.1, 1000]" 
  [position]="[1,1,5]">
</th-perspectiveCamera>
```

## Step 5) Interacting with the box

By adding a boolean member `selected` to our class
we can modify the scale of the cube

```html
<th-mesh>
  (onClick)="selected = !selected"
  [scale]="selected ? [2, 2, 2] : [1, 1, 1]"
  ...
</th-mesh>
```

## Step 6) Animating the box
By reacting to the canvas' `onRender`
we can animate the box by setting its rotation.

Template:
```html
<th-canvas (onRender)="this.onBeforeRender()">
  ...
  <th-mesh
    [rotation]="rotation"
    ...
  >
    ...
  </th-mesh>
  ...
</th-canvas>
```
Component:
```typescript
  ...
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public onBeforeRender() {
    this.rotation = [0, this.rotation[2] + 0.01, this.rotation[2] + 0.01];
  }
  ...
```

## Step 7) Creating a reusable Angular component 
The mesh part of the current code can be seperated into its own class
Then we can use two instances ot the box component in the app component
Take a look at the [working example](https://demike.github.io/ngx-three/introductory-example)

Box Template:
```html
<th-mesh
  [rotation]="rotation"
  [position]="position"
  (onClick)="selected = !selected"
  [scale]="selected ? [2, 2, 2] : [1, 1, 1]"

>
  <th-boxGeometry></th-boxGeometry>
  <th-meshBasicMaterial
    [args]="{color: 'purple'}"
  ></th-meshBasicMaterial>
</th-mesh>
```

Box Component:

```typescript
@Component({
    selector: 'app-box',
    template: `...`,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class Box {
    selected = false
    @Input()
    public rotation: [x: number, y: number, z: number] = [0, 0, 0];
    @Input()
    public position: [x: number, y: number, z: number] = [0, 0, 0];
  }
```

App Template:
```html
<th-canvas (onRender)="this.onBeforeRender()">
  <th-scene>
    <th-box
      [position]="[-2,0,0]"
      [rotation]="rotation"
    >
    </th-box>
    <th-box
      [position]="[2,0,0]"
      [rotation]="rotation"
    >
    </th-box>
    <th-ambientLight> </th-ambientLight>
    <th-perspectiveCamera [args]="[75, 2, 0.1, 1000]" [position]="[1,1,5]"></th-perspectiveCamera>
  </th-scene>
</th-canvas>
```

App Component:
```typescript
@Component({
  selector: 'app-example',
  template: `...`
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public onBeforeRender() {
    this.rotation = [0, this.rotation[2] + 0.01, this.rotation[2] + 0.01];
  }
}
```

# Canvas / View / Scene
!!! WORK IN PROGRESS !!!

Canvas View and Scene are the main building blocks of ngx-three.

## ThCanvas 

In general the `ThCanvas` contains [ThView](#ThView) istances, and a
[ThView](#ThView) contains a [ThScene](#ThScene).

In a standard scenario `ThCanvas` provides (or actually 'is') the default view.
So a typical template might look like this
```html
<th-canvas>
  <th-scene>
    ...
  </th-scene>
</th-canvas>
```

`ThCanvas` creates the canvas dom element that's used
for rendering. Actually ThCanvas is the <b>only</b> ngx-three component that inserts an element into dom!

`ThCanvas` provides the [ThEngineService](#Render-Loop-/-ThEngineService).
That means if you have multiple `ThCanvas` instances
every one gets its own engine service.

As `ThCanvas` is derived from `ThView` it also shares its inputs / outputs

## ThView
One can say that `ThView` provides the view port.
The view consists of:
- a scene [ThScene](#ThScene)
- a camera (`ThCamera`)
- and an <b>optional</b> effect composer (`ThEffectComposer`)

This combination makes it possible to render multiple scenarios
- The same scene with multiple camera perspectives ([Multi View Example](https://demike.github.io/ngx-three/views-example))
  <img src="./docs/multi-view.png" width="50%" style="display:block"/>
- mutliple scenes with the same camera ([Multi Scene Example](demike.github.io/ngx-three/multi-scene-example))
  <img src="./docs/multi-scene.png" width="50%" style="display:block"/>
- one / multiple scene with multiple effects
<!--<img src="./docs/multi-view-postprocessing.png" width="50%" style="display:block">-->

## ThScene

`ThScene` is the ngx-three wrapper of THREE.Scene and provides all
of its members as inputs. It is <b>mandatory</b> for rendering.

## Render Loop / ThEngineService

This service runs the render loop.

You can react to a 'global' render event by means
of using the `beforeRender` output of the `ThRenderDirective`.

In addition you can react to the `onRender`
outputs of the `ThView` (`ThCanvas` is derived from it)  instances.

```html
<th-object3D (beforeRender)="doSomething()">
</th-object3D>
```



# Objects / Meshes

In three.js anything that can be added to a Scene is an `Object3D`.
In ngx-three the component `ThObject3D` with the tag `th-object3D` can be seen as the equivalent.

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


## How to put existing THREE.Object3D objects into the angular template
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

# Utilitiy Pipes / Directives
ngx-three provides some utility pipes that ease input assignments

## ThRenderDirective
This directive can be used to react to 'global' rendering loop events.

Listen to the `beforeRender` output to to apply changes
before the next rendering run happens.

If you want to do something directly after the rendering pass use `afterRender`.

## color pipe
Use this pipe to create a Color from any of it's constructor parameters
```html
<th-ambientLight
  [color]="'#aabbcc' | color"
>
</th-ambientLight>
...
```
## vector pipes
the `vector2`, `vector3`, and `vector4` construct the respective vector from an array of numbers
usage:
```html
<th-object3D
  [position]="[1,2,3] | vector3"
>
</th-object3D>
```

## clone pipe
calls clone on a clonable three.js instance (or it's ngx-three wrapper)
and ensures that the clone call only happens once

```html
<th-hemisphereLight
  #light
  ...
></th-hemisphereLight>

<th-light [objRef]="light | clone"></th-light>
```

## Stats Directive

If you want to display the well known stats panel
<img src="./docs/stats-panel.png" style="vertical-align:middle"/>
you can do that simply by adding the `thStats` directive
to the canvas.

```html
<th-canvas [thStats]="true">
...
</th-canvas>
```
