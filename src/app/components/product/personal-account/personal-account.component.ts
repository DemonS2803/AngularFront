import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit {

  currentRole: string = localStorage.getItem('currentRole') || "";
  constructor() { }

  ngOnInit(): void {
  }

}
