import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  accountsettings: boolean = false;
  usersetting() {
    this.accountsettings = !this.accountsettings;
  }

  bookmarkscard:boolean=true;
  changePassword:boolean=false;
  id: any = 'all';
  tabChange(ids: any) {
    if(ids=='all')
    {
      this.bookmarkscard=true;
    }
    else{
      this.bookmarkscard=false;
    }
    this.id = ids;
    console.log(this.id);
  }
  loginForm=new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_-]).{8,}$/
      ),
    ]),
  })

  onLogin(data:any){
    console.log(this.loginForm.value)

  }
  showPassword = false;
  showPasswordIcon = 'fa-eye-slash';
  showPasswordIcon1 = 'fa-eye-slash';
  showPasswordIcon2 = 'fa-eye-slash';
  Forgotshow = false;
  EmailSent = false;
  togglePasswordVisibility(passwordInput: any) {
    this.showPassword = !this.showPassword;
    this.showPasswordIcon = this.showPassword ?'fa-eye':'fa-eye-slash';
    passwordInput.type = this.showPassword ? 'text':'password' ;
  }
  togglePasswordVisibility1(passwordInput1: any) {
    this.showPassword = !this.showPassword;
    this.showPasswordIcon1 = this.showPassword ?'fa-eye':'fa-eye-slash';
    passwordInput1.type = this.showPassword ? 'text':'password' ;
  }
  togglePasswordVisibility2(passwordInput2: any) {
    this.showPassword = !this.showPassword;
    this.showPasswordIcon2 = this.showPassword ?'fa-eye':'fa-eye-slash';
    passwordInput2.type = this.showPassword ? 'text':'password' ;
  }
}
