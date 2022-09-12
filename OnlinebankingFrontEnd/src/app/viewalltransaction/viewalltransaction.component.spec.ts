import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewalltransactionComponent } from './viewalltransaction.component';

//import { ViewalltransactionComponent } from './viewalltransaction.component';

describe('ViewalltransactionComponent', () => {
  let component: ViewalltransactionComponent;
  let fixture: ComponentFixture<ViewalltransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalltransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalltransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
