import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibonacciWorkerComponent } from './fibonacci-worker.component';

const routes: Routes = [
  { path: '', component: FibonacciWorkerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciNoworkerRoutingModule { }
