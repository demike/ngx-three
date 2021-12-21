import { Color } from 'three';
import { FogPipe } from './fog.pipe';

describe('FogPipe', () => {
  it('create a fog pipe', () => {
    const pipe = new FogPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform to a fog', () => {
    const colorValue = 0xffbbff;
    const pipe = new FogPipe();
    const fog = pipe.transform([colorValue,0.1,1000]);
    expect(fog.color).toEqual(new Color(colorValue));
  });
});
