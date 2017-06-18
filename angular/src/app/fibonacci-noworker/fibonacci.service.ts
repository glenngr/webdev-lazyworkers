import { Injectable } from '@angular/core';
import { FibonacciServiceInterface } from '../shared/fibonacci.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FibonacciNoWorkerService implements FibonacciServiceInterface {
  private _fibSequence$: Subject<number[]> = new Subject<number[]>();

  get fibSequence$(): Observable<number[]> {
    return this._fibSequence$.asObservable();
  }

  constructor() { }
  public generate(n: number): void {
    const result = this.generateFibonacciSeries(n);
    this._fibSequence$.next(result);
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
