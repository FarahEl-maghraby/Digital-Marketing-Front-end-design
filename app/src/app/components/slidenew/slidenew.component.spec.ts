import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidenewComponent } from './slidenew.component';

describe('SlidenewComponent', () => {
  let component: SlidenewComponent;
  let fixture: ComponentFixture<SlidenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
