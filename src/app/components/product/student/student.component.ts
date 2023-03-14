import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  mainText: string = "";
  isRightRole: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(environment.backendURL + "/api/student/home", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': localStorage.getItem("token") || ""
      }
    }).subscribe({
      next: ((response: any) => {
        this.mainText = "Hello bro student. success login"
        this.isRightRole = true;
        console.log(response);
      }),
      error: ((error: any) => {
        this.mainText = "no one in rus has rights, even you";
        console.log(error);
      })
    })
  }

}
