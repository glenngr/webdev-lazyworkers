import { Injectable } from '@angular/core';

import { FibonacciServiceInterface } from '../shared/fibonacci.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FibonacciWorkerService implements FibonacciServiceInterface {
  private worker: Worker;
  fibSequence$: Observable<number[]>;

  constructor() {
    this.initWorker('app/fibonacci-worker/fibworker.js');
  }

  initWorker(workerUrl) {
    this.worker = new Worker(workerUrl);
    this.fibSequence$ = Observable.fromEvent(this.worker, 'message')
    .map(event => {
      const e: any = event;
      return e.data;
    })
    .share();
  }

  generate(n: number): void {
    this.worker.postMessage({ cmd: 'generate', msg: n });
  }
}
