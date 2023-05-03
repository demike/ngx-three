import { Color } from 'three';
import { ColorPipe } from './color.pipe';

const refColor = new Color('#aabbcc');

describe('ColorPipe', () => {
  it('should create an instance', () => {
    const pipe = new ColorPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform a string to Color', () => {
    const pipe = new ColorPipe();
    const color = pipe.transform('#aabbcc');
    expect(color).toEqual(refColor);
  });

  it('should transform a value to Color', () => {
    const pipe = new ColorPipe();
    const color = pipe.transform(0xaabbcc);
    expect(color).toEqual(refColor);
  });

  it('should transform an array to Color', () => {
    const pipe = new ColorPipe();
    const color = pipe.transform([refColor.r, refColor.g, refColor.b]);
    expect(color).toEqual(refColor);
  });
});
