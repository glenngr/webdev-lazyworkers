import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FibonacciNoworkerComponent } from './fibonacci-noworker/fibonacci-noworker.component';
import { FibonacciWorkerComponent } from './fibonacci-worker/fibonacci-worker.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', component: HomeComponent },
  { path: 'fibonacci-noworker', component: FibonacciNoworkerComponent },
  { path: 'fibonacci-worker', component: FibonacciWorkerComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

