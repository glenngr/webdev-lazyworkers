//import { BrowserModule } from '@angular/platform-browser';
import { WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FibonacciService } from './fibonacci.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WorkerAppModule,
    FormsModule,
    HttpModule
  ],
  providers: [FibonacciService],
  bootstrap: [AppComponent]
})
export class AppModule { }
