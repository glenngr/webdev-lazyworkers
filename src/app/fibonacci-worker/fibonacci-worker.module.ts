import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciWorkerComponent } from './fibonacci-worker.component';
import { FibonacciNoworkerRoutingModule } from './fibonacci-worker-routing.module';
import { FibonacciWorkerService } from './fibonacci-worker.service';

@NgModule({
  imports: [
    CommonModule,
    FibonacciNoworkerRoutingModule
  ],
  declarations: [FibonacciWorkerComponent],
  providers: [FibonacciWorkerService]
})
export class FibonacciWorkerModule { }
