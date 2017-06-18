import { Component } from '@angular/core';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  fibnumbers: number[] = [];
  constructor(private fib: FibonacciService) {

  }

  public generate(n: number) {
    console.log('gen', n);
    this.fibnumbers = this.fib.generate(n);
  }
}
