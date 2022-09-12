import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByAccountDateComponent } from './find-by-account-date.component';

describe('FindByAccountDateComponent', () => {
  let component: FindByAccountDateComponent;
  let fixture: ComponentFixture<FindByAccountDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByAccountDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByAccountDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
