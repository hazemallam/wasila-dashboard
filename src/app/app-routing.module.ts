import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { BlogComponent } from './components/blog/blog.component';
import { CourseComponent } from './components/course/course.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { VideosComponent } from './components/videos/videos.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {path:'blog', component:BlogComponent , canActivate : [AuthGuard]},
  {path:'', component:LoginComponent, pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent , canActivate : [AuthGuard]},
  {path:'alumni', component:AlumniComponent , canActivate : [AuthGuard]},
  {path:'video', component:VideosComponent , canActivate : [AuthGuard]},
  {path:'course', component:CourseComponent , canActivate : [AuthGuard]},
  {path:'users', component:UsersComponent, canActivate:[AuthGuard]},
  {path:'admins', component:AdminComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
