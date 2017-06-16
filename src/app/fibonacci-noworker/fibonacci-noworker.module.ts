import { NgModule } from '@angular/core';

import { FibonacciNoworkerComponent } from './fibonacci-noworker.component';
import { FibonacciNoworkerRoutingModule } from './fibonacci-noworker-routing.module';
import { FibonacciNoWorkerService } from './fibonacci.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FibonacciNoworkerRoutingModule,
    SharedModule
  ],
  declarations: [FibonacciNoworkerComponent],
  providers: [FibonacciNoWorkerService]
})
export class FibonacciNoworkerModule { }
