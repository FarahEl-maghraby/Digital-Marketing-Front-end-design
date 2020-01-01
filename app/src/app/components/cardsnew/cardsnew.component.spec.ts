import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsnewComponent } from './cardsnew.component';

describe('CardsnewComponent', () => {
  let component: CardsnewComponent;
  let fixture: ComponentFixture<CardsnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
