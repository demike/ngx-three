import { NgModule } from '@angular/core';
import { NgxThreeGeneratedModule } from './generated/ngx-three-generated.module';
import { ThCanvas } from './ThCanvas';
import { ThWrapperBase } from './ThWrapperBase';

@NgModule({
  declarations: [ThCanvas],
  imports: [NgxThreeGeneratedModule],
  exports: [NgxThreeGeneratedModule, ThCanvas],
})
export class NgxThreeModule {}
