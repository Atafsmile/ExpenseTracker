import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ExpenseserService } from '../expenseser.service';

@Component({
  selector: 'app-listofexpense',
  templateUrl: './listofexpense.component.html',
  styleUrls: ['./listofexpense.component.css']
})
export class ListofexpenseComponent implements OnInit {
  data:any=[];

  constructor(public router:Router,private expenseserService:ExpenseserService) {
    this.data=this.expenseserService.getExpense();
   }

  ngOnInit(): void {
  }
  deleteExpense(id){
    this.expenseserService.deleteExpense(id);
  }

  delete(){
    alert('item is permante store')
  }
}
