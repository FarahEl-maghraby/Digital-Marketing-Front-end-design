import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderpostComponent } from './sliderpost.component';

describe('SliderpostComponent', () => {
  let component: SliderpostComponent;
  let fixture: ComponentFixture<SliderpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
