import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdSidenavModule, MdListModule} from '@angular/material';
import { SharedModule } from './shared/shared.module';
// import { FibonacciNoworkerModule } from './fibonacci-noworker/fibonacci-noworker.module';
// import { FibonacciWorkerModule } from './fibonacci-worker/fibonacci-worker.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MdSidenavModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
