import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofexpenseComponent } from './listofexpense.component';

describe('ListofexpenseComponent', () => {
  let component: ListofexpenseComponent;
  let fixture: ComponentFixture<ListofexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofexpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
