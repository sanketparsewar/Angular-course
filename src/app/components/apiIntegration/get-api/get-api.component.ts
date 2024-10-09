import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-get-api",
  standalone: true,
  imports: [],
  templateUrl: "./get-api.component.html",
  styleUrl: "./get-api.component.css",
})
export class GetApiComponent {
  userList: any;
  customerList: any;
  // dependency injection
  // create object of HttpClient
  constructor(private http: HttpClient) {}
  // this is common code to call the api
  getAllUser() {
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((result: any) => {
        this.userList = result;
      });
  }
  getAllCustomer() {
    this.http
      .get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers")
      .subscribe((res: any) => {
        this.customerList = res.data;
      });
  }
}
