import { Pipe, PipeTransform } from '@angular/core';
import { Plane, Vector3 } from 'three';

/**
 * creates a plane from a normal vector3 and a constant:
 * https://threejs.org/docs/#api/en/math/Plane
 */
@Pipe({
  name: 'plane',
})
export class PlanePipe implements PipeTransform {
  transform(normal: [number, number?, number?], constant?: number) {
    return new Plane(new Vector3(...normal), constant);
  }
}
