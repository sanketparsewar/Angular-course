import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    NaPipe,
    AsyncPipe,
    PercentPipe,
    CurrencyPipe,
    JsonPipe,
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  firstName: string = 'this is Angular SESSION';
  currentDate: Date = new Date();
  amount: number = 23.5;
  marks: number = 21;
  currentTime: Observable<Date> = new Observable<Date>;

  student: any = {
    name: 'sanket',
    age: 22,
    city: 'pune',
    state:''
  };
  // emmiting data every 1 seconds
  constructor(){
    this.currentTime=interval(1000).pipe(map(()=>new Date()));
  }
}
