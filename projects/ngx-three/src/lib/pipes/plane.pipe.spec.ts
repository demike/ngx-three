/* tslint:disable:no-unused-variable */

import { Vector3 } from 'three';
import { PlanePipe } from './plane.pipe';




describe('Pipe: Planee', () => {
  it('create an instance', () => {
    const pipe = new PlanePipe();
    expect(pipe).toBeTruthy();
  });

  it('should create a plane', () => {
    const pipe = new PlanePipe();

    const plane = pipe.transform([0,1,0], 3);

    expect(plane.constant).toBe(3);
    expect(plane.normal).toEqual(new Vector3(0,1,0));
  });
});
