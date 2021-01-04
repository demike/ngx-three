import { NgModule } from '@angular/core';
import { NgxThreeGeneratedModule } from './generated/ngx-three-generated.module';
import { ThCanvas } from './ThCanvas';
import { ThObjectBase } from './ThObjectBase';

@NgModule({
  declarations: [ThCanvas],
  imports: [NgxThreeGeneratedModule],
  exports: [NgxThreeGeneratedModule, ThCanvas],
})
export class NgxThreeModule {}
