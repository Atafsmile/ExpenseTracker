import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { ListofexpenseComponent } from './listofexpense/listofexpense.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';



@NgModule({
  declarations: [
    AppComponent,
    NewExpenseComponent,
    ListofexpenseComponent,
    EditExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
