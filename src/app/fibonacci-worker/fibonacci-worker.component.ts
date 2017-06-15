import { Component } from '@angular/core';
import { FibonacciWorkerService } from './fibonacci-worker.service';
import { FibService } from '../shared/fibonacci.service';

@Component({
  selector: 'webdev-fibonacci-worker',
  templateUrl: './fibonacci-worker.component.html',
  styleUrls: ['./fibonacci-worker.component.scss'],
  providers: [{ provide: FibService, useClass: FibonacciWorkerService}]
})
export class FibonacciWorkerComponent {

  constructor() { }

}
