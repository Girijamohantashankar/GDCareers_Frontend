import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CareerAdviceComponent } from './career-advice/career-advice.component';
import { SalaryGuideComponent } from './salary-guide/salary-guide.component';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  {
   path:"", redirectTo:'/landing',pathMatch:'full'
  },
  {
    path:"landing", component:LandingPageComponent
   },
  {
    path:"login", component:LoginComponent
   },
   {
    path:"signup", component:SignupComponent
   },
   {
    path:"career", component:CareerAdviceComponent
   },
   {
    path:"salaryGuide", component:SalaryGuideComponent
   },
   {
    path:"home", component:HomeComponent
   },{
    path:"job-details", component:JobDetailsComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
