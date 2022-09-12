import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredittransactionComponent } from './credittransaction.component';

describe('CredittransactionComponent', () => {
  let component: CredittransactionComponent;
  let fixture: ComponentFixture<CredittransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredittransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredittransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
