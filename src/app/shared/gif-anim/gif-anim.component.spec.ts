import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifAnimComponent } from './gif-anim.component';

describe('GifAnimComponent', () => {
  let component: GifAnimComponent;
  let fixture: ComponentFixture<GifAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
