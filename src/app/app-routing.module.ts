import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AttendanceAndLeaveComponent } from './attendance-and-leave/attendance-and-leave.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ItAndSecurityComponent } from './it-and-security/it-and-security.component';
import { OthersComponent } from './others/others.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[

    {path:'',component:FacultyComponent},
    {path:'faculty',component:FacultyComponent},
    {path:'attendanceAndLeave',component:AttendanceAndLeaveComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'itAndSecurity',component:ItAndSecurityComponent},
    {path:'others',component:OthersComponent},
    {path:'profile',component:ProfileComponent}

  ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
