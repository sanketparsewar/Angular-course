import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import { DataBindingComponent } from './components/data-binding/data-binding.component';
// import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
// import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
