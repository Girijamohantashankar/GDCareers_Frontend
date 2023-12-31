import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendlinkService } from '../service/backendlink.service';
import {  CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public service: BackendlinkService,public cookie : CookieService,public router:Router){}
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(
        '^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$'
        // '[a-zA-Z0-9]+\.[a-zA-Z0-9]+@gmail\.com'
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,}$/
      ),
    ]),
  });


  showPassword = false;
  showPasswordIcon = 'fa-eye-slash';
  Forgotshow = false;
  EmailSent = false;
  togglePasswordVisibility(passwordInput: any) {
    this.showPassword = !this.showPassword;
    this.showPasswordIcon = this.showPassword ? 'fa-eye' : 'fa-eye-slash';
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }
  forgetModal: boolean = false;
  forgetmodal() {
    this.forgetModal = true;
  }
  backmodal() {
    this.forgetModal = false;
  }
  closeIncorrectModal:boolean=false;
  closeIncorrect() {
    this.closeIncorrectModal=true;
  }


  //login
  onLogin(data: any) {
    console.log(this.loginForm.value);
    this.service.login(data).subscribe((res:any)=>{
      if (res.message=='login successful') {
        var expiredDate = new Date();
        expiredDate.setDate(expiredDate.getDate() + 7);
        this.cookie.set('token', res.token,expiredDate);
        this.cookie.set('email', res.email);
        this.router.navigate(['home']);      }
      else{
        this.router.navigate(['/login']);
      }
    })
  }
}
