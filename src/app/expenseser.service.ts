import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseserService {
  ExpenseData = [];

  constructor() {}

  getExpense() {
    return this.ExpenseData;
  }

  createExpense(data: any) {
    this.ExpenseData.push(data);
  }

  getExpenseById(id: number) {
    return this.ExpenseData[id];
  }

  updateExpense(id: number, data: any) {
    this.ExpenseData[id] = data;
  }

  deleteExpense(id: number) {
    this.ExpenseData.splice(id, 1);
  }
}
