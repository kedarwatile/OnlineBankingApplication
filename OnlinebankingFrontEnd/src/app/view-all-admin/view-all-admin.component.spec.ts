import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAdminComponent } from './view-all-admin.component';

describe('ViewAllAdminComponent', () => {
  let component: ViewAllAdminComponent;
  let fixture: ComponentFixture<ViewAllAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
