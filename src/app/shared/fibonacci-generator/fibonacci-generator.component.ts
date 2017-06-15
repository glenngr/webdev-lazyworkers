import { Component } from '@angular/core';
import { FibService } from '../fibonacci.service';

@Component({
  selector: 'webdev-fibonacci-generator',
  templateUrl: './fibonacci-generator.component.html',
  styleUrls: ['./fibonacci-generator.component.scss']
})
export class FibonacciGeneratorComponent  {

  fibnumbers: number[] = [];
  private _antallFib: number;
  constructor(private fibonacciSvc: FibService) {
  }

  get antallFib() {
    return this._antallFib;
  }

  set antallFib(value) {
    this._antallFib = +value;
    this.generate(this._antallFib);
  }

  private generate(number: number) {
    this.fibnumbers = this.fibonacciSvc.generate(number);
  }

}
