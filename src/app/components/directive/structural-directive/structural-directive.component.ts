import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css',
})
export class StructuralDirectiveComponent {
  isDiv1Visible: boolean = false;
  isDiv2Visible: boolean = false;
  selectedState:string=''
  num1:string=''
  num2:string=''

  cityArray:string[]=['pune','Nagpur','Thane',"Nashik","Nanded",'Mumbai']
  isActive:boolean=false
  
studentList:any[]=[
  {studId:21 ,name:'aaa',city:'pune',isActive:false},
  {studId:28 ,name:'bbb',city:'mumbai',isActive:false},
  {studId:33 ,name:'ccc',city:'Thane',isActive:true},
  {studId:45 ,name:'ddd',city:'Nashik',isActive:false},
  {studId:58 ,name:'eee',city:'Nagpur',isActive:true},
]

constructor(private router:Router){

}

navigateToAttribute(){
  this.router.navigateByUrl('attribute-dir')
}
  showDiv1(){
    this.isDiv1Visible=true
  }
  hideDiv1(){
    this.isDiv1Visible=false
  }
  toggleDiv2(){
    this.isDiv2Visible=this.isDiv2Visible?false:true;
    // or
    // this.isDiv2Visible=!this.isDiv2Visible
  }
  
}
