import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'fibonacci-noworker',
    loadChildren: './fibonacci-noworker/fibonacci-noworker.module#FibonacciNoworkerModule'
  },
  {
    path: 'fibonacci-worker',
    loadChildren: './fibonacci-worker/fibonacci-worker.module#FibonacciWorkerModule'
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
