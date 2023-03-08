import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  constructor(private http: HttpClient) {
  }

  login = "vasya2003";
  ngOnInit(): void {
    this.http.get<any>(environment.backendURL  + "/api/auth/signin").subscribe(
      {
        next: ((response: any) => {
          console.log(response);
          console.log(response.body)
        }),
        error: (error => {
          console.log(error)
        })
      }
    )

  }

}
