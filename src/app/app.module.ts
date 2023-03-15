import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {LoginComponent} from "./components/product/login/login.component";
 import {HttpClientModule} from "@angular/common/http";
 import {HomeComponent} from "./components/product/home/home.component";
import {FormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import { AdminComponent } from './components/product/admin/admin.component';
import { StudentComponent } from './components/product/student/student.component';
import { TeacherComponent } from './components/product/teacher/teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    StudentComponent,
    TeacherComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {





}
