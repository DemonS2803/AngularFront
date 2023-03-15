import {Component, Inject, inject, Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthUserDto} from "../../models/auth-user-dto";
import * as http from "http";
import {ChosenRoleDto} from "../../models/chosen-role-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // private cookieValue: string | undefined;


  constructor(private http: HttpClient,
              private router: Router) {
  }


  login: string = "";
  password: string = "";
  role: string = "";
  rolesToChoose: string[] = [];
  token: string = "";
  choose_role: boolean = false;

  ngOnInit(): void {

  }

  sendAuthRequest() {
    let authdto = new AuthUserDto(this.login, this.password, "");
    console.log(authdto)
    this.http.post<any>(environment.backendURL + "/api/auth/login", JSON.stringify(authdto), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }).subscribe(
      {
        next: ((response: any) => {
          console.log(response)
          if (!response.needToChooseRole) {
            this.token = response.user.token;
            localStorage.setItem("token", response.user.token)

            console.log(this.token);
          } else {
            console.log(response);
            this.choose_role = true;
            this.token = response.user.token;
            localStorage.setItem("token", response.user.token)
            this.rolesToChoose = response.roles;
            console.log(this.rolesToChoose);
            console.log(response.token)
          }
        }),
        error: (error => {
          console.log(authdto);
          console.log(error);
        })
      }
    )
  }

  sendChooseRoleRequest() {
    let chosenRole = new ChosenRoleDto(this.role);
    console.log(chosenRole);
    console.log(localStorage.getItem("token") || "")
    this.http.post<any>(environment.backendURL + "/api/auth/choose_role", JSON.stringify(chosenRole), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': localStorage.getItem("token") || ""
      }
    }).subscribe(
      {
        next: ((response: any) => {
          console.log(this.token);
          console.log(response.token);
          console.log("success");
          this.token = response.token;
          localStorage.setItem("token", response.token)
          this.router.navigate(["home"]);
        }),
        error: ((error: any) => {
          console.log(error);
        })
      }
    )
  }



}
