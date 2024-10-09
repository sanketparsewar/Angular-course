import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent {
  // studentForm is form name
  // formGroup is a way where we can bind multiple form controls
  // the field that we want to send with post, put api that should be given here ex-firstName,lastName etc
  // empty initialized 
  // validators can be multiple so write in as array
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastName: new FormControl(''),
    userName:new FormControl('',[Validators.email]),
    city:new FormControl(''),
    state:new FormControl(''),
    zipCode:new FormControl(''),
    isAcceptTerms:new FormControl('')
  });
  // storing the values got from the student form
  formValue:any;
  onSave(){
this.formValue=this.studentForm.value;

  }
}
