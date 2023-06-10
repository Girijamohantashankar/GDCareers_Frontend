import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse,} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendlinkService {
  constructor(private http: HttpClient,private router:Router) {}

  // signup link to backend link
  signup(data:any){
     return this.http.post('http://localhost:4000/api/signup',data);
  }

  login(data:any)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'email':data.email,
      'password':data.password,
      Accept: 'application/json',
    })
    return this.http.get('http://localhost:4000/api/login',{ headers });
  }
}
