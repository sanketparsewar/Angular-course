import { Component } from '@angular/core';

// component decorator
// we use selector to call any component
@Component({
  selector: 'app-add-employee', //unique identifier of this component
  standalone: true, //not dependent on ther files
  imports: [],
  // either use file path in templateUrl and give file name or use template and give html code
  // templateUrl: './add-employee.component.html',  //html code of this component
  template: "<h1 class='text-primary'>Hello</h1>", //html code of this component
  // either give file path in styleUrl or direct write css in styles
  // styleUrl: './add-employee.component.css'
  styles: ['.primary{color:red}'],
})
export class AddEmployeeComponent {}
