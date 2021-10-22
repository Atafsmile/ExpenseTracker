import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';

const routes: Routes = [
  {path:'new-expense',component:NewExpenseComponent},
  {path:'edit-expense/:id',component:EditExpenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
