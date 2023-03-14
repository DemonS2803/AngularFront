import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {
  logExperimentalWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  mainText: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(environment.backendURL + "/api/teacher/home", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': localStorage.getItem("token") || ""
      }
    }).subscribe({
      next: ((response: any) => {
        this.mainText = "Учителя работают сцука";
        console.log(response)
      }),
      error: ((error: any) => {
        this.mainText = "no one in rus has rights, even you";
        console.log(error);
      })
    })
  }

}
