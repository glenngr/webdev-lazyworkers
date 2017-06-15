import { Injectable } from '@angular/core';
import { FibonacciServiceInterface } from '../shared/fibonacci.service';

@Injectable()
export class FibonacciNoWorkerService implements FibonacciServiceInterface {

  constructor() { }
  public generate(n: number): number[] {
    return this.generateFibonacciSeries(n);
  }

  private calculateNextFibonacciValue(n: number): number {
    let s = 0;

    if (n === 0) {
      return (s);
    }
    if (n === 1) {
      s += 1;
      return (s);
    } else {
      return (this.calculateNextFibonacciValue(n - 1) + this.calculateNextFibonacciValue(n - 2));
    }
  }

  private generateFibonacciSeries(n): number[] {
    const results: number[] = [];
    for (let i = 0; i <= n - 1; i++) {
      results.push(this.calculateNextFibonacciValue(i));
    }
    return results;
  }
}
