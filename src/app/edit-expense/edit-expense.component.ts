import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseserService } from '../expenseser.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  expenseForm:FormGroup;
  constructor(private expenseserService:ExpenseserService,private activatedRoute:ActivatedRoute,
    private router:Router) {
    this.expenseForm=new FormGroup({
      selectExpense:new FormControl('',[Validators.required]),
      expenseDetail:new FormControl('',[Validators.required,Validators.minLength(3)]),
      amount:new FormControl('',[Validators.required]),
      dateOfExpense:new FormControl('',[Validators.required])
    });
    let data=this.expenseserService.getExpenseById(
      this.activatedRoute.snapshot.params['id']

    );
    this.expenseForm.setValue(data);
   }
  ngOnInit(): void {
  }
  cancelexpence(){
    this.expenseForm.reset();
  }
  update(){
    this.expenseserService.updateExpense(
      this.activatedRoute.snapshot.params['id'],
      this.expenseForm.value
    );
    this.router.navigate(['/']);

  }
}
