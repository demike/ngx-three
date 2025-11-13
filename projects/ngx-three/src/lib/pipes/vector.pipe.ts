import { Pipe, PipeTransform } from '@angular/core';
import { Vector2, Vector3, Vector4 } from 'three';

/**
 * transform arrays to vectors
 */
@Pipe({
  name: 'vector2',
  pure: true,
})
export class Vector2Pipe implements PipeTransform {
  transform(args: ConstructorParameters<typeof Vector2>): Vector2 {
    return new Vector2(...args);
  }
}

@Pipe({
  name: 'vector3',
  pure: true,
})
export class Vector3Pipe implements PipeTransform {
  transform(args: ConstructorParameters<typeof Vector3>): Vector3 {
    return new Vector3(...args);
  }
}

@Pipe({
  name: 'vector4',
  pure: true,
})
export class Vector4Pipe implements PipeTransform {
  transform(args: ConstructorParameters<typeof Vector4>): Vector4 {
    return new Vector4(...args);
  }
}
