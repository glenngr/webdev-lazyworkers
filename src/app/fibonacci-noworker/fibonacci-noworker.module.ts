import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciNoworkerComponent } from './fibonacci-noworker.component';
import { FibonacciNoworkerRoutingModule } from './fibonacci-noworker-routing.module';
import { FibonacciService } from './fibonacci.service';

@NgModule({
  imports: [
    CommonModule,
    FibonacciNoworkerRoutingModule
  ],
  declarations: [FibonacciNoworkerComponent],
  providers: [FibonacciService]
})
export class FibonacciNoworkerModule { }
