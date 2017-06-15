import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciNoworkerComponent } from './fibonacci-noworker.component';
import { FibonacciNoworkerRoutingModule } from './fibonacci-noworker-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FibonacciNoworkerRoutingModule
  ],
  declarations: [FibonacciNoworkerComponent]
})
export class FibonacciNoworkerModule { }
