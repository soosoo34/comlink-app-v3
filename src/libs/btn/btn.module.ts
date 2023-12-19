import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnComponent } from '@libs/btn/btn.component';

@NgModule({
  declarations: [BtnComponent],
  imports: [CommonModule],
  exports: [BtnComponent],
})
export class BtnModule {}
