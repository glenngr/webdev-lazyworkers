import { TestBed, inject } from '@angular/core/testing';

import { FibonacciWorkerService } from './fibonacci-worker.service';

describe('FibonacciWorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FibonacciWorkerService]
    });
  });

  it('should be created', inject([FibonacciWorkerService], (service: FibonacciWorkerService) => {
    expect(service).toBeTruthy();
  }));
});
