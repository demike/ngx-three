import { NgModule } from '@angular/core';
import { RaycasterEventDirective } from './events/raycaster.events.directive';
import { NgxThreeGeneratedModule } from './generated/ngx-three-generated.module';
import { ThGLTFLoader } from './loaders/ThGLTFLoader';
import { ThLoader } from './loaders/ThLoader';
// import { ThOBJLoader } from './loaders/ThOBJLoader';
import { ThCanvas } from './ThCanvas';
import { ThMaterialBase } from './ThMaterialBase';
import { ThObjectBase } from './ThObjectBase';
import { ThView } from './ThView';
import { ThWrapperBase } from './ThWrapperBase';

@NgModule({
  declarations: [
    ThCanvas,
    ThView,
    ThObjectBase,
    ThMaterialBase,
    ThWrapperBase,
    ThLoader,
    ThGLTFLoader,
    //   ThOBJLoader,
    RaycasterEventDirective,
  ],
  imports: [NgxThreeGeneratedModule],
  exports: [
    NgxThreeGeneratedModule,
    ThCanvas,
    ThLoader,
    ThGLTFLoader,
    //   ThOBJLoader,
    RaycasterEventDirective,
  ],
})
export class NgxThreeModule {}
