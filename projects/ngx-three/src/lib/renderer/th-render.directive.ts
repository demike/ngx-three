import { Directive, Output } from '@angular/core';
import { ThEngineService } from '../ThEngine.service';


@Directive({
  selector: '[beforeRender]'
})
export class ThRenderDirective {

  constructor(private engineService: ThEngineService) {

  }


  @Output()
  public get beforeRender() {
    return this.engineService.beforeRender$;
  }

}
