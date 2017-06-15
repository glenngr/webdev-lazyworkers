import { Injectable } from '@angular/core';

import { FibonacciServiceInterface } from '../shared/fibonacci.service';

@Injectable()
export class FibonacciWorkerService implements FibonacciServiceInterface {
  constructor() { }

  generate(n: number): number[] {
    throw new Error("Method not implemented.");
  }
}
