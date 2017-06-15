import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdListModule, MdSlideToggleModule } from '@angular/material';
import { FibonacciGeneratorComponent } from './fibonacci-generator/fibonacci-generator.component';
import { GifAnimComponent } from './gif-anim/gif-anim.component';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    FormsModule
  ],
  exports: [FibonacciGeneratorComponent, GifAnimComponent],
  declarations: [FibonacciGeneratorComponent, GifAnimComponent]
})
export class SharedModule { }
