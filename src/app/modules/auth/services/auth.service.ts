import {map, Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RequestAuth} from '../models/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth$ = new EventEmitter<boolean>();
  user$ = new EventEmitter<RequestAuth>();
  API:string=`${environment.baseURL}`;

  constructor(
    private http:HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout():Observable<any> {
    return this.http.post(this.API+'/api/logout', {}, {
      headers: { authorization: "Bearer " + this.getToken() }
      })
      .pipe(
        map( (res :any) =>{
          localStorage.removeItem('token');
          localStorage.removeItem('user_info');
        })
    );
  }

  login(data: any):Observable<any>{
    return this.http.post(this.API+'/api/login',data, {
      withCredentials:true
    }).pipe(
      map( (res :any) =>{
        this.setToken(res.message);
        this.isAuth$.emit(true);
        return true;
      })
    )
  }


  setUserInfo(info: RequestAuth): void {
    localStorage.setItem('user_info', JSON.stringify(info));
  }

  getUserInfo(): RequestAuth {
    return JSON.parse(localStorage.getItem('user_info') as string);
  }

  getUser(): Observable<any>{
    return this.http.get<RequestAuth>(this.API+"/api/user", {
          headers: { authorization: "Bearer " + this.getToken() }
      }).pipe(
        map( res  =>{
          this.setUserInfo(res);
          this.user$.emit(res);
          return res;
        })
      );
  }


  routesByName($route:any): boolean{
    const routes_by_users = this.getUserInfo().permissions;
    for (let i = routes_by_users.length - 1; i >= 0; i--) {
      if(routes_by_users[i].route == $route || (routes_by_users[i].role == 'Admin' &&
       routes_by_users[i].route == null) ){
        return true;
      }
    }
    return false;
  }

}
