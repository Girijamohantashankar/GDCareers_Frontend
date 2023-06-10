import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CareerAdviceComponent } from './career-advice/career-advice.component';
import { SalaryGuideComponent } from './salary-guide/salary-guide.component';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FilterPipe } from './pipe/filter.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ViewJobsComponent } from './view-jobs/view-jobs.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    CareerAdviceComponent,
    SalaryGuideComponent,
    HomeComponent,
    JobDetailsComponent,
    AdminPageComponent,
    ProfileComponent,
    ResetPasswordComponent,
    FilterPipe,
    LoaderComponent,
    ViewJobsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
