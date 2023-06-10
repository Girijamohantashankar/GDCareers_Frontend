import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendlinkService } from '../service/backendlink.service';
import { CookieService } from 'ngx-cookie-service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(public service: BackendlinkService, private cookie: CookieService,private router : Router) { }
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
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


  // submit form
  onSignup(data: any) {
    console.log(this.signupForm.value);
    this.service.signup(data).subscribe((res: any) => {
      console.log(res);

      if (res.message=='done properly') {
        var expiredDate = new Date();
        expiredDate.setDate(expiredDate.getDate() + 7);
        this.cookie.set('token', res.token,expiredDate);
        this.cookie.set('email', res.email);
      }
      else{
        this.router.navigate['/signup'];
      }

    })
  }
}
