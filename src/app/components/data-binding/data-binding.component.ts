import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  //datatypes -string number boolean date
  // typescript is a stringly typed
  // here the value of varibles we send to html page using interpolation and property binding
  courseName: string = 'Angular 18';
  stateName:string='Maharashtra'
  inputType = 'radio';
  myClassName: string = 'bg-primary';
  rollno: number = 21;
  isValid: boolean = true;
  currentDate: Date = new Date();

  // signal - introduced after angular 17
  // this is same as a variable
  firstName =signal("sanket");

  constructor() {}
  changeCourseName(){
    // change the value of variable when function is called
    this.courseName='React Js';
    // change the value of signal when function is called
    this.firstName.set("parsewar")
  }
  // here we want to get the value from html page to ts
  // declaring the function in typescript
  // the message value we are getting from html file
  showAlert(message:string) {
    alert(message)
  }
}
