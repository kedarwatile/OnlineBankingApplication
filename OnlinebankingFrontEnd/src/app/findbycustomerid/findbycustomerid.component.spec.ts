import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbycustomeridComponent } from './findbycustomerid.component';

describe('FindbycustomeridComponent', () => {
  let component: FindbycustomeridComponent;
  let fixture: ComponentFixture<FindbycustomeridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbycustomeridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbycustomeridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
