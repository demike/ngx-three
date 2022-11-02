import { NgModule } from '@angular/core';
import { RaycasterEventDirective } from './events/raycaster.events.directive';
import { NgxThreeGeneratedModule } from './generated/ngx-three-generated.module';
import { ThDDSLoaderDirective, ThDDSLoaderPipe } from './loaders/compressed-texture/ThDDSLoader';
import { ThKTX2LoaderDirective, ThKTX2LoaderPipe } from './loaders/compressed-texture/ThKTX2Loader';
import { ThKTXLoaderDirective, ThKTXLoaderPipe } from './loaders/compressed-texture/ThKTXLoader';
import { ThPVRLoaderDirective, ThPVRLoaderPipe } from './loaders/compressed-texture/ThPVRLoader';
import { ThEXRLoaderDirective, ThEXRLoaderPipe } from './loaders/data-texture/ThEXRLoader';
import { ThRGBELoaderDirective, ThRGBELoaderPipe } from './loaders/data-texture/ThRGBELoader';
import { ThRGBMLoaderDirective, ThRGBMLoaderPipe } from './loaders/data-texture/ThRGBMLoader';
import { ThTGALoaderDirective, ThTGALoaderPipe } from './loaders/data-texture/ThTGALoader';
import { ThCubeTextureLoaderDirective, ThCubeTextureLoaderPipe } from './loaders/ThCubeTextureLoader';
import { ThGLTFLoaderDirective, ThGLTFLoaderPipe } from './loaders/ThGLTFLoader';
import { ThTextureLoaderDirective, ThTextureLoaderPipe } from './loaders/ThTextureLoader';
import { ClonePipe } from './pipes/clone.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { FogPipe } from './pipes/fog.pipe';
import { Vector2Pipe, Vector3Pipe, Vector4Pipe } from './pipes/vector.pipe';
import { ThRenderDirective } from './renderer/th-render.directive';
import { StatsDirective } from './stats/stats.directive';
import { ThObjLoaderDirective, ThObjLoaderPipe } from './loaders/ThOBJLoader';
import { ThCanvas } from './ThCanvas';
import { ThMaterialBase } from './ThMaterialBase';
import { ThObjectBase } from './ThObjectBase';
import { ThView } from './ThView';
import { ThWrapperBase } from './ThWrapperBase';
import { ThFBXLoaderDirective, ThFBXLoaderPipe } from './loaders/ThFBXLoader';
import { ThLogLuvLoaderDirective, ThLogLuvLoaderPipe } from './loaders/data-texture/ThLogLuvLoader';
import { ThPLYLoaderDirective, ThPLYLoaderPipe } from './loaders/ThPLYLoader';
import { BindPipe } from './pipes/bind.pipe';
import { HtmlComponent } from './extra/web/html.component';
import { CommonModule } from '@angular/common';
import { RefByIdDirective } from './directives/ref-by-id.directive';
import { PlanePipe } from './pipes/plane.pipe';

@NgModule({
  declarations: [
    ThCanvas,
    ThView,
    ThObjectBase,
    ThMaterialBase,
    ThWrapperBase,
    ThGLTFLoaderDirective,
    ThGLTFLoaderPipe,
    ThObjLoaderPipe,
    ThObjLoaderDirective,
    ThFBXLoaderDirective,
    ThFBXLoaderPipe,
    ThPLYLoaderDirective,
    ThPLYLoaderPipe,
    RaycasterEventDirective,
    ColorPipe,
    Vector2Pipe,
    Vector3Pipe,
    Vector4Pipe,
    ClonePipe,
    FogPipe,
    BindPipe,
    PlanePipe,
    StatsDirective,
    ThRenderDirective,
    // texture loaders
    ThTextureLoaderDirective,
    ThTextureLoaderPipe,
    ThCubeTextureLoaderDirective,
    ThCubeTextureLoaderPipe,
    // compressed texture loaders
    ThDDSLoaderDirective,
    ThDDSLoaderPipe,
    ThKTXLoaderDirective,
    ThKTXLoaderPipe,
    ThKTX2LoaderDirective,
    ThKTX2LoaderPipe,
    ThPVRLoaderDirective,
    ThPVRLoaderPipe,
    // data texture loaders
    ThEXRLoaderDirective,
    ThEXRLoaderPipe,
    ThRGBELoaderDirective,
    ThRGBELoaderPipe,
    ThRGBMLoaderDirective,
    ThRGBMLoaderPipe,
    ThTGALoaderDirective,
    ThTGALoaderPipe,
    ThLogLuvLoaderDirective,
    ThLogLuvLoaderPipe,
       // directives
       RefByIdDirective,
    //extras
    HtmlComponent
  ],
  imports: [NgxThreeGeneratedModule, CommonModule],
  exports: [
    NgxThreeGeneratedModule,
    ThCanvas,
    ThView,
    ThGLTFLoaderDirective,
    ThGLTFLoaderPipe,
    ThObjLoaderDirective,
    ThObjLoaderPipe,
    ThFBXLoaderDirective,
    ThFBXLoaderPipe,
    ThPLYLoaderDirective,
    ThPLYLoaderPipe,
    RaycasterEventDirective,
    ColorPipe,
    Vector2Pipe,
    Vector3Pipe,
    Vector4Pipe,
    ClonePipe,
    FogPipe,
    BindPipe,
    PlanePipe,
    ThRenderDirective,
    StatsDirective,
    // texture loaders
    ThTextureLoaderDirective,
    ThTextureLoaderPipe,
    ThCubeTextureLoaderDirective,
    ThCubeTextureLoaderPipe,
    // compressed texture loaders
    ThDDSLoaderDirective,
    ThDDSLoaderPipe,
    ThKTXLoaderDirective,
    ThKTXLoaderPipe,
    ThKTX2LoaderDirective,
    ThKTX2LoaderPipe,
    ThPVRLoaderDirective,
    ThPVRLoaderPipe,
    // data texture loaders
    ThEXRLoaderDirective,
    ThEXRLoaderPipe,
    ThRGBELoaderDirective,
    ThRGBELoaderPipe,
    ThRGBMLoaderDirective,
    ThRGBMLoaderPipe,
    ThTGALoaderDirective,
    ThTGALoaderPipe,
    ThLogLuvLoaderDirective,
    ThLogLuvLoaderPipe,
    // directives
    RefByIdDirective,
    // extra
    HtmlComponent
  ]
})
export class NgxThreeModule {}
