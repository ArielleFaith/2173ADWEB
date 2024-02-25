import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { EmployeeService } from './employee.service';
import { ProductService } from './product.service';

@NgModule({
  declarations: [AppComponent, NewCmpComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [EmployeeService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
