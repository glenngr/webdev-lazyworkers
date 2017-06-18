import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FibService } from '../fibonacci.service';

@Component({
  selector: 'webdev-fibonacci-generator',
  templateUrl: './fibonacci-generator.component.html',
  styleUrls: ['./fibonacci-generator.component.scss']
})
export class FibonacciGeneratorComponent  {
  fibSequence$: Observable<number[]>;
  private _numFib: number;

  constructor(private fibonacciSvc: FibService) {
    this.fibSequence$ = this.fibonacciSvc.fibSequence$;
  }

  get numFib() {
    return this._numFib;
  }

  set numFib(value) {
    this._numFib = +value;
    this.generate(this._numFib);
  }

  private generate(number: number) {
    this.fibonacciSvc.generate(number);
  }
}
