import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByCustomerComponent } from './find-by-customer.component';

describe('FindByCustomerComponent', () => {
  let component: FindByCustomerComponent;
  let fixture: ComponentFixture<FindByCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
