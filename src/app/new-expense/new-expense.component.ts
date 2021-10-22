import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import * as $ from 'jquery';
import { ExpenseserService } from '../expenseser.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {
expenseForm:FormGroup;
  constructor(private expenseserService:ExpenseserService,private activatedRoute:ActivatedRoute,
    private router:Router) {
    this.expenseForm=new FormGroup({
      selectExpense:new FormControl('',[Validators.required]),
      expenseDetail:new FormControl('',[Validators.required,Validators.minLength(3)]),
      amount:new FormControl('',[Validators.required]),
      dateOfExpense:new FormControl('',[Validators.required])
    });
    
   }

  ngOnInit() {
    // Data Picker Initialization

    
  }
  saveEpense():any{
    if(this.expenseForm.valid){
      this.expenseserService.createExpense(this.expenseForm.value);
      console.log(this.expenseForm.value);
      this.router.navigate(['/']);

      this.expenseForm.reset();
    }

  }
 
  cancelexpence(){
    this.expenseForm.reset();
  }
}
