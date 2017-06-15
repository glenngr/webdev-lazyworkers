import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciGeneratorComponent } from './fibonacci-generator.component';

describe('FibonacciGeneratorComponent', () => {
  let component: FibonacciGeneratorComponent;
  let fixture: ComponentFixture<FibonacciGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
