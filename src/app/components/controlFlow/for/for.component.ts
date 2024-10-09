import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  dayNumber:string=''
  cityArray: String[] = [
    'Pune',
    'Mumbai',
    'Thane',
    'Nanded',
    'Nagpur',
    'Latur',
  ];
  studentList: any[] = [
    { studId: 21, name: 'aaa', city: 'pune', isActive: false },
    { studId: 28, name: 'bbb', city: 'mumbai', isActive: false },
    { studId: 33, name: 'ccc', city: 'Thane', isActive: true },
    { studId: 45, name: 'ddd', city: 'Nashik', isActive: false },
    { studId: 58, name: 'eee', city: 'Nagpur', isActive: true },
  ];
}
