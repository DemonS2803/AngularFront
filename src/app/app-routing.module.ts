import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/product/login/login.component";
import {HomeComponent} from "./components/product/home/home.component";
import {AdminComponent} from "./components/product/admin/admin.component";
import {TeacherComponent} from "./components/product/teacher/teacher.component";
import {StudentComponent} from "./components/product/student/student.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'student', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
