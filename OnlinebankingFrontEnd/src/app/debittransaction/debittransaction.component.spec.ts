import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebittransactionComponent } from './debittransaction.component';

describe('DebittransactionComponent', () => {
  let component: DebittransactionComponent;
  let fixture: ComponentFixture<DebittransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebittransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebittransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
