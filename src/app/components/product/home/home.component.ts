import {Component, OnInit} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthUserDto} from "../../models/auth-user-dto";
import {FilterRequestDto} from "../../models/filter-request-dto";
import {FilterDto} from "../../models/fiter-dto";

@Component({
  selector: "home-product",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  reg_num: string = "";
  fio: string = "";
  birthday: string = "";
  pol: string = "";

  ngOnInit(): void {
    this.http.get<any>(environment.backendURL  + "/home/users", {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      } }).subscribe(
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

  postMethod(): void {
    let filterDto = new FilterRequestDto(this.reg_num,
                                  this.birthday,
                                  this.fio,
                                  this.pol
                                          )
    console.log(filterDto);
    this.http.post<any>(environment.backendURL + "/home/test", JSON.stringify(filterDto), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }).subscribe(
      {
        next: ((response: any) => {
          console.log(JSON.stringify(response))
          console.log(response)
        }),
        error: (error => {
          console.log(filterDto);
          console.log(error)
        })
      }
    )
  }

  selectMethod(): void {
    let newvar = "";


  }



}
