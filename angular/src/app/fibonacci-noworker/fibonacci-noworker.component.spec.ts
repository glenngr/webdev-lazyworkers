import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciNoworkerComponent } from './fibonacci-noworker.component';

describe('FibonacciNoworkerComponent', () => {
  let component: FibonacciNoworkerComponent;
  let fixture: ComponentFixture<FibonacciNoworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciNoworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciNoworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
