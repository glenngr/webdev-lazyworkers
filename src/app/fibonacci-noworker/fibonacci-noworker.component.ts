import { Component } from '@angular/core';
import { FibonacciNoWorkerService } from './fibonacci.service';
import { FibService } from '../shared/fibonacci.service';

@Component({
  selector: 'webdev-fibonacci-noworker',
  templateUrl: './fibonacci-noworker.component.html',
  styleUrls: ['./fibonacci-noworker.component.scss'],
  providers: [{ provide: FibService, useClass: FibonacciNoWorkerService}]
})
export class FibonacciNoworkerComponent {

}
