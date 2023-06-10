import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public cookie: CookieService,public http:HttpClient,public router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.cookie.get('token');
    if (token == '' && !token) {
      this.router.navigate(['/login']);
      return false;
    }
    else{
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      // let verify=false;
      // this.http.get('http://localhost:4000/api/auth', { headers }).subscribe((res:any)=>{
      //   if(res.message=='authorized')
      //   {
      //     console.log('yeah');
      //     verify=true;
      //   }else{
      //     verify=false;
      //   }

      // })
      // console.log(verify);
      // return true;
      return this.http.get<boolean>('http://localhost:4000/api/auth', { headers })
      .toPromise()
      .then((response:any) => {
        // Allow or block navigation based on the response
        if (response.message=='authorized') {
          return true; // Allow navigation
        } else {
          return false; // Block navigation
        }
      })
      .catch(error => {
        console.error('Error while checking authentication:', error);
        return false; // Block navigation on error
      });
    }

  }



}
