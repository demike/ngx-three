import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorRepresentation } from 'three';


/**
 * constructs a color of it's constructor parameters
 */
@Pipe({
  name: 'color',
  pure: true
})
export class ColorPipe implements PipeTransform {
  /* ContructorProperties does not support multiple constructors --> */
  transform(args: ColorRepresentation | [r: number, g: number, b: number]): Color {
    if(Array.isArray(args)) {
      return new Color(...args);
    } else {
      return new Color(args);
    }
  }

}
