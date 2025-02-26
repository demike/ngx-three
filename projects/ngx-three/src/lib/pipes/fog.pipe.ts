import { Pipe, PipeTransform } from '@angular/core';
import { Fog } from 'three';

@Pipe({
    name: 'fog',
    pure: true,
    standalone: false
})
export class FogPipe implements PipeTransform {
  transform(args: ConstructorParameters<typeof Fog>): Fog {
    return new Fog(...args);
  }
}
