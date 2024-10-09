import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css',
})
export class IfelseComponent {
  div1Visible: boolean = true;
  div2Visible: boolean = true;

  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';

  showDiv1() {
    this.div1Visible = true;
  }

  hideDiv1() {
    this.div1Visible = false;
  }

  toggleDiv2() {
    this.div2Visible = !this.div2Visible;
  }
}
