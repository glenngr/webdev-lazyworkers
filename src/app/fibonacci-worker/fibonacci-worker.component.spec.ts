import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciWorkerComponent } from './fibonacci-worker.component';

describe('FibonacciWorkerComponent', () => {
  let component: FibonacciWorkerComponent;
  let fixture: ComponentFixture<FibonacciWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
