import { NgModule } from '@angular/core';
import { NgxThreeGeneratedModule } from './generated/ngx-three-generated.module';
import { ThCanvas } from './ThCanvas';
import { ThMaterialBase } from './ThMaterialBase';
import { ThObjectBase } from './ThObjectBase';
import { ThView } from './ThView';
import { ThWrapperBase } from './ThWrapperBase';

@NgModule({
  declarations: [ThCanvas, ThView, ThObjectBase, ThMaterialBase, ThWrapperBase],
  imports: [NgxThreeGeneratedModule],
  exports: [NgxThreeGeneratedModule, ThCanvas],
})
export class NgxThreeModule {}
