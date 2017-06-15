import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciWorkerComponent } from './fibonacci-worker.component';
import { FibonacciNoworkerRoutingModule } from './fibonacci-worker-routing.module';
import { FibonacciWorkerService } from './fibonacci-worker.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FibonacciNoworkerRoutingModule,
    SharedModule
  ],
  declarations: [FibonacciWorkerComponent],
  providers: [FibonacciWorkerService]
})
export class FibonacciWorkerModule { }
