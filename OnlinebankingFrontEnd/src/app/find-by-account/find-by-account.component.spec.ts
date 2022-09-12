import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByAccountComponent } from './find-by-account.component';

describe('FindByAccountComponent', () => {
  let component: FindByAccountComponent;
  let fixture: ComponentFixture<FindByAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
