import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovecustomerComponent } from './removecustomer.component';

describe('RemovecustomerComponent', () => {
  let component: RemovecustomerComponent;
  let fixture: ComponentFixture<RemovecustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovecustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
