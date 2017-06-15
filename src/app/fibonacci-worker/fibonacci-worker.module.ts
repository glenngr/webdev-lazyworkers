import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciWorkerComponent } from './fibonacci-worker.component';
import { FibonacciNoworkerRoutingModule } from './fibonacci-worker-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FibonacciNoworkerRoutingModule
  ],
  declarations: [FibonacciWorkerComponent]
})
export class FibonacciWorkerModule { }
