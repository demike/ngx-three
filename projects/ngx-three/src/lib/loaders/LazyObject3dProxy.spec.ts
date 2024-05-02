import { Object3D, Object3DEventMap } from 'three';
import { createLazyObject3DProxy, LazyObject3DProxy } from './LazyObject3dProxy';

describe('LazyObj3DProxy', () => {
  let proxy: LazyObject3DProxy;

  beforeEach(async () => {
    proxy = createLazyObject3DProxy();
    //createLazyObject3DProxy();
  });

  it('should create', () => {
    expect(proxy).toBeDefined();
  });

  it('should store the value if no real object3d is set', () => {
    expect(proxy.castShadow).toBeFalse(); // the default value of the default object3D
    proxy.castShadow = true;
    expect(proxy.castShadow).toBeTrue();
  });

  it('should forward changes to the real object3D', () => {
    const obj = new Object3D();
    proxy.objRef = obj;
    expect(proxy.objRef).toBeDefined();

    expect(obj.castShadow).toBeFalse();
    proxy.castShadow = true;
    expect(obj.castShadow).toBeTrue();
    expect(proxy.castShadow).toBeTrue();
  });

  it('should apply changed properties to the real object3D when it is applied', () => {
    const obj = new Object3D();
    expect(obj.castShadow).toBeFalse();

    // change the proxy
    proxy.castShadow = true;
    expect(proxy.castShadow).toBeTrue();

    // apply the object to the proxy
    proxy.objRef = obj;

    //the real object should have the changed value too now
    expect(obj.castShadow).toBeTrue();
  });

  it('should apply children to the real object3D when it is applied', () => {
    const obj = new Object3D();
    expect(obj.children.length).toBe(0);

    const child = new Object3D();

    // add a child to the proxy
    proxy.add(child);

    // apply the object to the proxy
    proxy.objRef = obj;

    expect(proxy.children.length).toBe(1);
    expect(proxy.children[0]).toBe(child);

    const child2 = new Object3D();

    proxy.add(child2);

    expect(obj.children.length).toBe(2);

    proxy.remove(child);

    expect(obj.children.length).toBe(1);
  });

  it('should apply event listeners to the real object3D when it is applied', (done) => {
    const obj = new Object3D<{ click: { customAttr: string } } & Object3DEventMap>();
    expect(obj.children.length).toBe(0);

    const listener = () => {
      done();
    };
    proxy.addEventListener('click', listener);

    // apply the object to the proxy
    proxy.objRef = obj;

    expect(obj.hasEventListener('click', listener)).toBeTrue();

    obj.dispatchEvent({ customAttr: 'event name', type: 'click' });
  });

  it('should remove event listeners of the real object3D when it is applied', () => {
    const obj = new Object3D();
    expect(obj.children.length).toBe(0);

    const listener = () => {};
    proxy.addEventListener('click', listener);

    // apply the object to the proxy
    proxy.objRef = obj;

    expect(obj.hasEventListener('click', listener)).toBeTrue();

    proxy.removeEventListener('click', listener);

    expect(obj.hasEventListener('click', listener)).toBeFalse();
    expect(proxy.hasEventListener('click', listener)).toBeFalse();
  });
});
