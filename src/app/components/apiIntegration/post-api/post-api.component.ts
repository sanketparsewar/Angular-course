import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent implements OnInit {
  departmentList: any[] = [];
  depObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  ngOnInit() {
    this.getAllDepartment();
  }

  http = inject(HttpClient);

  onSave() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/complaint/AddnewDepartment',
        this.depObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Added Successfully');
          this.getAllDepartment();
          this.onReset();
        } else {
          alert(res.message);
        }
      });
  }

  onReset() {
    this.depObj = {
      departmentId: 0,
      departmentName: '',
      departmentLogo: '',
    };
  }
  getAllDepartment() {
    this.http
      .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
      .subscribe((result: any) => {
        this.departmentList = result.data;
      });
  }
  edit(item: any) {
    this.depObj = item;
  }
  onUpdate() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
        this.depObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Update Successfully');
          this.onReset();
          this.getAllDepartment();
        } else {
          alert(res.message);
        }
      });
  }

  onDelete(depId: number) {
    if (confirm('Delete this record permanantly?')) {
      this.http
        .delete(
          'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +
            depId
        )
        .subscribe((res: any) => {
          this.getAllDepartment();
        });
    }
  }
}
