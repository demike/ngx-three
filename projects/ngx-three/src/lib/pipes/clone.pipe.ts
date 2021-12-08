import { Pipe, PipeTransform } from '@angular/core';
import { ThWrapperBase } from '../ThWrapperBase';

/**
 * create a clone of any "cloneable" three.js class (or from it's ngx-three warpper)
 */
@Pipe({
  name: 'clone',

})
export class ClonePipe implements PipeTransform {

  transform<T extends { clone(): T} >(value?: ThWrapperBase<T, any> | T | null  ): T | undefined {
    if (!value) {
      return;
    }

    if(value instanceof ThWrapperBase) {
      return value.objRef?.clone();
    } else {
      return value.clone();
    }

  }

}
