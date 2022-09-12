import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAdminComponent } from './remove-admin.component';

describe('RemoveAdminComponent', () => {
  let component: RemoveAdminComponent;
  let fixture: ComponentFixture<RemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
