import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibonacciNoworkerComponent } from './fibonacci-noworker.component';

const routes: Routes = [
  { path: '', component: FibonacciNoworkerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FibonacciNoworkerRoutingModule { }
