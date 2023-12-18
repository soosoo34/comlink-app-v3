import { NgClass, NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EbbInputComponent } from '@libs/input/input.component';

@NgModule({
  declarations: [EbbInputComponent],
  imports: [NgClass, FormsModule, NgIf, NgForOf],
  exports: [NgClass, EbbInputComponent],
})
/**
 * InputModule
 *
 * @description
 * This module exports the `EbbInputComponent` and the `NgClass` module.
 * The `EbbInputComponent` is a reusable input component that can be used in different parts of the application.
 * The `NgClass` module is used to add/remove classes from the input component's host element.
 */
export class EbbInputModule {}
