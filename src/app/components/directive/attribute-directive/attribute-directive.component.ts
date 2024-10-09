import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  div1BgColor: string = 'bg-danger';
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isCheckboxActive: boolean = false;
customStyle:any={
  'color':'white',
  'background-color':'blue',
  'width':'200px',
  'height':'200px',
  'border-radius':'50px'
}

  studentList: any[] = [
    { studId: 21, totalMarks:67, gender:'M', name: 'aaa', city: 'pune', isActive: false },
    { studId: 28, totalMarks:45, gender:'M', name: 'bbb', city: 'mumbai', isActive: false },
    { studId: 33, totalMarks:27, gender:'F', name: 'ccc', city: 'Thane', isActive: true },
    { studId: 45, totalMarks:80, gender:'F', name: 'ddd', city: 'Nashik', isActive: false },
    { studId: 58, totalMarks:54, gender:'M', name: 'eee', city: 'Nagpur', isActive: true },
  ];

  dangerColor() {
    this.div1BgColor = 'bg-danger';
  }
  primaryColor() {
    this.div1BgColor = 'bg-primary';
  }
  toggleDiv2BgColor() {
    this.isDiv2Active = !this.isDiv2Active;
  }
}
