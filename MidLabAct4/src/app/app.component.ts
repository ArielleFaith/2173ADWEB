import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products = [];
  employees = [];
  constructor(
    private employeeService: EmployeeService,
    private productService: ProductService
  ) {
    this.employees = this.employeeService.getEmployees();
    this.products = this.productService.getProducts();
  }
}
