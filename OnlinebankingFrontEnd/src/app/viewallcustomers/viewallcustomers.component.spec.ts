import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcustomersComponent } from './viewallcustomers.component';

describe('ViewallcustomersComponent', () => {
  let component: ViewallcustomersComponent;
  let fixture: ComponentFixture<ViewallcustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
