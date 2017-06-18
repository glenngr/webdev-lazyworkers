import { Injectable } from '@angular/core';

@Injectable()
export class FibonacciService {

  constructor() { }
  public generate(n: number): number[] {
    console.log('generate', n);
    return this.generateFibonacciSeries(n);
  }

  private calculateNextFibonacciValue(n: number): number {
    var s = 0;
    var returnValue;

    if (n == 0) {
      return (s);
    }
    if (n == 1) {
      s += 1;
      return (s);
    }
    else {
      return (this.calculateNextFibonacciValue(n - 1) + this.calculateNextFibonacciValue(n - 2));
    }
  }

  private generateFibonacciSeries(n): number[] {
    var results: number[] = [];
    for (var i = 0; i <= n - 1; i++) {
      results.push(this.calculateNextFibonacciValue(i));
    }
    console.log(results);
    return results;
  }
}
