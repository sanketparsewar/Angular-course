import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';

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
  constructor(private services: DepartmentService) {}

  onReset() {
    this.depObj = {
      departmentId: 0,
      departmentName: '',
      departmentLogo: '',
    };
  }
  edit(item: any) {
    this.depObj = item;
  }
  // -------------------------------------------
  // this is direct use of the url inside the component file
  // onSave() {
  //   this.http
  //     .post(
  //       'https://projectapi.gerasim.in/api/complaint/AddnewDepartment',
  //       this.depObj
  //     )
  // .subscribe((res: any) => {
  //   if (res.result) {
  //     alert('Added Successfully');
  //     this.getAllDepartment();
  //     this.onReset();
  //   } else {
  //     alert(res.message);
  //   }
  // });
  // }

  // this is by using function created in the service .ts file
  onSave() {
    this.services.postApi(this.depObj).subscribe((res: any) => {
      if (res.result) {
        alert('Added Successfully');
        this.getAllDepartment();
        this.onReset();
      } else {
        alert(res.message);
      }
    });
  }
  // --------------------------------------------------

  // this is direct api calling inside the component
  // getAllDepartment() {
  //   this.http
  //     .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
  //     .subscribe((result: any) => {
  //       this.departmentList = result.data;
  //     });
  // }

  // this is using the service created for department
  getAllDepartment() {
    this.services.getApi().subscribe((result: any) => {
      this.departmentList = result.data;
    });
  }
  // -------------------------------------------------------

  // ------------------------------------------------------
  // this is function creted for the update directly usig post api url inside .ts file
  // onUpdate() {
  //   this.http
  //     .post(
  //       'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
  //       this.depObj
  //     )
  //     .subscribe((res: any) => {
  //       if (res.result) {
  //         alert('Update Successfully');
  //         this.onReset();
  //         this.getAllDepartment();
  //       } else {
  //         alert(res.message);
  //       }
  //     });
  // }

  // this is code using the service
  onUpdate() {
    this.services.putApi(this.depObj).subscribe((res: any) => {
      if (res.result) {
        alert('Update Successfully');
        this.onReset();
        this.getAllDepartment();
      } else {
        alert(res.message);
      }
    });
  }
  // ---------------------------------------------------------------

  // this is using the delete url directly inside the component .ts file
  // onDelete(depId: number) {
  //   if (confirm('Delete this record permanantly?')) {
  //     this.http
  //       .delete(
  //         'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +
  //           depId
  //       )
  // .subscribe((res: any) => {
  //   this.getAllDepartment();
  // });
  //   }
  // }

  // this is by using the function created inside the service .ts file
  onDelete(depId: number) {
    if (confirm('Delete this record permanantly?')) {
      this.services.deleteApi(depId).subscribe((res: any) => {
        this.getAllDepartment();
      });
    }
  }
}
