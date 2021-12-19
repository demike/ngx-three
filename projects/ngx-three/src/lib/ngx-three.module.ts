import { NgModule } from '@angular/core';
import { RaycasterEventDirective } from './events/raycaster.events.directive';
import { NgxThreeGeneratedModule } from './generated/ngx-three-generated.module';
import { ThCompressedTextureLoaderDirective, ThCompressedTextureLoaderPipe } from './loaders/ThCompressedTextureLoader';
import { ThCubeTextureLoaderDirective, ThCubeTextureLoaderPipe } from './loaders/ThCubeTextureLoader';
import { ThDataTextureLoaderDirective, ThDataTextureLoaderPipe } from './loaders/ThDataTextureLoader';
import { ThGLTFLoaderDirective, ThGLTFLoaderPipe } from './loaders/ThGLTFLoader';
import { ThLoader } from './loaders/ThLoader';
import { ThTextureLoaderDirective, ThTextureLoaderPipe } from './loaders/ThTextureLoader';
import { ClonePipe } from './pipes/clone.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { Vector2Pipe, Vector3Pipe, Vector4Pipe } from './pipes/vector.pipe';
import { ThRenderDirective } from './renderer/th-render.directive';
import { StatsDirective } from './stats/stats.directive';
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
    ThGLTFLoaderDirective,
    ThGLTFLoaderPipe,
    //   ThOBJLoader,
    RaycasterEventDirective,
    ColorPipe,
    Vector2Pipe,
    Vector3Pipe,
    Vector4Pipe,
    ClonePipe,
    StatsDirective,
    ThRenderDirective,
    // texture loaders
    ThTextureLoaderDirective,
    ThTextureLoaderPipe,
    ThCompressedTextureLoaderPipe,
    ThCompressedTextureLoaderDirective,
    ThCubeTextureLoaderDirective,
    ThCubeTextureLoaderPipe,
    ThDataTextureLoaderDirective,
    ThDataTextureLoaderPipe

  ],
  imports: [NgxThreeGeneratedModule],
  exports: [
    NgxThreeGeneratedModule,
    ThCanvas,
    ThView,
    ThLoader,
    ThGLTFLoaderDirective,
    ThGLTFLoaderPipe,
    //   ThOBJLoader,
    RaycasterEventDirective,
    ColorPipe,
    Vector2Pipe,
    Vector3Pipe,
    Vector4Pipe,
    ClonePipe,
    ThRenderDirective,
    StatsDirective,
    // texture loaders
    ThTextureLoaderDirective,
    ThTextureLoaderPipe,
    ThCompressedTextureLoaderPipe,
    ThCompressedTextureLoaderDirective,
    ThCubeTextureLoaderDirective,
    ThCubeTextureLoaderPipe,
    ThDataTextureLoaderDirective,
    ThDataTextureLoaderPipe
  ]
})
export class NgxThreeModule {}
