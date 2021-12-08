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
import { ColorPipe } from './pipes/color.pipe';
import { Vector2Pipe, Vector3Pipe, Vector4Pipe } from './pipes/vector.pipe';
import { ClonePipe } from './pipes/clone.pipe';

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
    ColorPipe,
    Vector2Pipe,
    Vector3Pipe,
    Vector4Pipe,
    ClonePipe
  ],
  imports: [NgxThreeGeneratedModule],
  exports: [
    NgxThreeGeneratedModule,
    ThCanvas,
    ThView,
    ThLoader,
    ThGLTFLoader,
    //   ThOBJLoader,
    RaycasterEventDirective,
    ColorPipe,
    Vector2Pipe,
    Vector3Pipe,
    Vector4Pipe,
    ClonePipe
  ]
})
export class NgxThreeModule {}
