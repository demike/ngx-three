import { Vector2Pipe, Vector3Pipe, Vector4Pipe } from './vector.pipe';

describe('VectorPipe', () => {
  it('create a vector2 pipe', () => {
    const pipe = new Vector2Pipe();
    expect(pipe).toBeTruthy();
  });

  it('create a vector3 pipe', () => {
    const pipe = new Vector3Pipe();
    expect(pipe).toBeTruthy();
  });

  it('create a vector4 pipe', () => {
    const pipe = new Vector4Pipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform a vector2 pipe', () => {
    const pipe = new Vector2Pipe();
    const vector = pipe.transform([1, 2]);
    expect(vector.x).toBe(1);
    expect(vector.y).toBe(2);
  });

  it('should transform a vector3 pipe', () => {
    const pipe = new Vector3Pipe();
    const vector = pipe.transform([1, 2, 3]);
    expect(vector.x).toBe(1);
    expect(vector.y).toBe(2);
    expect(vector.z).toBe(3);
  });

  it('should transform a vector4 pipe', () => {
    const pipe = new Vector4Pipe();
    const vector = pipe.transform([1, 2, 3, 4]);
    expect(vector.x).toBe(1);
    expect(vector.y).toBe(2);
    expect(vector.z).toBe(3);
    expect(vector.w).toBe(4);
  });
});
