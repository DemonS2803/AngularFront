import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(environment.backendURL + "/api/admin/page", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': localStorage.getItem("token") || ""
      }
    }).subscribe({
      next: ((response: any) => {
        console.log(response);
      }),
      error: ((error: any) => {
        console.log(error);
      })
    })
  }

}
