import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  http = inject(HttpClient);
  constructor() {}

  apiURL: string = 'https://projectapi.gerasim.in/api/Complaint/';

  getApi() {
    return this.http.get(this.apiURL + 'GetParentDepartment');
  }
  postApi(obj: any) {
    return this.http.post(`${this.apiURL}AddnewDepartment`, obj);
  }
  putApi(obj: any) {
    return this.http.post(this.apiURL + 'updateDepartment', obj);
  }
  deleteApi(depId: number) {
    return this.http.delete(
      `${this.apiURL}DeletedepartmentBydepartmentId?departmentId=` + depId
    );
  }
}
