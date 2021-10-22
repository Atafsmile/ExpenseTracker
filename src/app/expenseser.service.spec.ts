import { TestBed } from '@angular/core/testing';

import { ExpenseserService } from './expenseser.service';

describe('ExpenseserService', () => {
  let service: ExpenseserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
