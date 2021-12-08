import { ThWrapperBase } from '../ThWrapperBase';
import { Object3D, Vector2 } from 'three';
import { ClonePipe } from './clone.pipe';

describe('ClonePipe', () => {
  it('should create an instance', () => {
    const pipe = new ClonePipe();
    expect(pipe).toBeTruthy();
  });

  it('should clone an instance of a cloneable three.js object', () => {
    const pipe = new ClonePipe();
    const vector = new Vector2(1,2);
    const clone = pipe.transform(vector);

    expect(clone).toEqual(vector);
  });

  it('should return undefined on undefined | null inputs', () => {
    const pipe = new ClonePipe();
    const vector = new Vector2(1,2);
    let clone = pipe.transform();
    expect(clone).toBeUndefined();
    clone = pipe.transform(null);
    expect(clone).toBeUndefined();
  });

  it('should clone the objRef of an instance of ThWrapper', () => {
    const pipe = new ClonePipe();
    const obj = new Object3D();
    obj.name = 'TestName';
    const wrapper = new ThWrapperBase<Object3D,any>();
    wrapper.objRef = obj;

    const clone = pipe.transform(wrapper);

    expect(clone).toBeInstanceOf(Object3D);
    expect(clone?.name).toEqual(obj.name);
  });


});
