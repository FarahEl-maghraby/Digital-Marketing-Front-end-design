import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavserviceComponent } from './navservice.component';

describe('NavserviceComponent', () => {
  let component: NavserviceComponent;
  let fixture: ComponentFixture<NavserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
