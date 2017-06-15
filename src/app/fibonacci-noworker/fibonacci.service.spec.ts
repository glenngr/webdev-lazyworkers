import { TestBed, inject } from '@angular/core/testing';

import { FibonacciNoWorkerService } from './fibonacci.service';

describe('FibonacciService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FibonacciNoWorkerService]
    });
  });

  it('should be created', inject([FibonacciNoWorkerService], (service: FibonacciNoWorkerService) => {
    expect(service).toBeTruthy();
  }));
});
