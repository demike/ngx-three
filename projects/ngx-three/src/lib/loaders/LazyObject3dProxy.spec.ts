import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createLazyObject3DProxy, LazyObject3DProxy } from 'ngx-three';
import { Object3D } from 'three';

describe('LazyObj3DProxy', () => {
  let proxy: LazyObject3DProxy;

  beforeEach(async () => {
    proxy = createLazyObject3DProxy();
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
});
