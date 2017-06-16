import { Component } from '@angular/core';
import { FibService } from '../fibonacci.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'webdev-fibonacci-generator',
  templateUrl: './fibonacci-generator.component.html',
  styleUrls: ['./fibonacci-generator.component.scss']
})
export class FibonacciGeneratorComponent  {
  fibSequence$: Observable<number[]>;
  private _antallFib: number;

  constructor(private fibonacciSvc: FibService) {
    this.fibSequence$ = this.fibonacciSvc.fibSequence$;
  }

  get antallFib() {
    return this._antallFib;
  }

  set antallFib(value) {
    this._antallFib = +value;
    this.generate(this._antallFib);
  }

  private generate(number: number) {
    this.fibonacciSvc.generate(number);
  }
}
