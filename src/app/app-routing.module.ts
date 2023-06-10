import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CareerAdviceComponent } from './career-advice/career-advice.component';
import { SalaryGuideComponent } from './salary-guide/salary-guide.component';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoaderComponent } from './loader/loader.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'career',
    component: CareerAdviceComponent,
  },
  {
    path: 'salaryGuide',
    component: SalaryGuideComponent,
  },
  {
    path: 'home',
    component: HomeComponent,canActivate:[AuthGuard]
  },
  {
    path: 'job-details',
    component: JobDetailsComponent,
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'reset',
    component: ResetPasswordComponent,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  {
    path: 'viewJobs',
    component: ViewJobsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
