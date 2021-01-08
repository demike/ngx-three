import { NgModule } from '@angular/core';
import { NgxThreeGeneratedModule } from './generated/ngx-three-generated.module';
import { ThGLTFLoader } from './loaders/ThGLTFLoader';
import { ThLoader } from './loaders/ThLoader';
import { ThOBJLoader, ThOBJLoader2 } from './loaders/ThOBJLoader';
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
    ThOBJLoader,
    ThOBJLoader2,
  ],
  imports: [NgxThreeGeneratedModule],
  exports: [
    NgxThreeGeneratedModule,
    ThCanvas,
    ThLoader,
    ThGLTFLoader,
    ThOBJLoader,
    ThOBJLoader2,
  ],
})
export class NgxThreeModule {}
