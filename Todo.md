before render?

- canvas sucht sich camera für default view als viewchild (verschachtelung in tieferen ebenen nicht möglich)
- root-scene wird nicht / falsch als contentchild injected
- ~~EngineService ist nicht exportiert.~~
- obj! --> objRef?
- ~~EngineService resize (nicht auf window, sonder mit z.b.: resize observer auf canvas element)~~

- Model Laden
  - loader muss dynamisch werden
  - alle changes auf geladenes modell übertragen

```
im

set objRef() {

  // applyPropertiesToObjRef
   // attachToParent
  // setzen

  // emit objRef$
}
```

async_model1.objRef$<--ref.proxy<--async_model2

1. no model loaded
2. async_model 1 changes (loaded), async_model2 not yet loaded
3. objRef$ triggers, --> nothing happens
4. async_model2 loaded --> adds itself to ref.proxy, and in turn to the referenced node

5. async_model1.objRef is set
   - old obj1 has to be disposed
   - new obj is set to async_model1.proxy and so all parameters are applied to the new model (position ... )
   - objRef$ triggers
   - ref searches node, and applies it to its proxy and in turn the child nodes are applied to it
