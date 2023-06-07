import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm=new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,}$/
      ),
    ]),
    cpassword:new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,}$/
      ),
    ])
  })
  onRest(data:any){
    console.log(this.resetForm.value)

  }
  showPassword = false;
  showPasswordIcon = 'fa-eye-slash';
  Forgotshow = false;
  EmailSent = false;
  togglePasswordVisibility(passwordInput: any) {
    this.showPassword = !this.showPassword;
    this.showPasswordIcon = this.showPassword ?'fa-eye':'fa-eye-slash';
    passwordInput.type = this.showPassword ? 'text':'password' ;
  }
  showPasswordIcon1 = 'fa-eye-slash';
  togglePasswordVisibility1(passwordInput1: any) {
    this.showPassword = !this.showPassword;
    this.showPasswordIcon1 = this.showPassword ?'fa-eye':'fa-eye-slash';
    passwordInput1.type = this.showPassword ? 'text':'password' ;
  }
}
