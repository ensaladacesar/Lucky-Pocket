import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/getUsers`);
  }

  userExist(email: string): Observable <any> {
    const params: any = {email: email};
    return this.http.post(`http://localhost:3000/api/userExist`, params);
  }

  createUser(name: string, email: string, birthday:any): Observable <any> {
    const params: any = {name, email, birthday};
    return this.http.post(`http://localhost:3000/api/createUser`, params);
  }

  createUserPoints(user_id: number): Observable <any> {
    const params: any = {user_id};
    return this.http.post(`http://localhost:3000/api/createUserPoints`, params);
  }

  createUserCredit(user_id: number): Observable <any> {
    const params: any = {user_id};
    return this.http.post(`http://localhost:3000/api/createUserCredit`, params);
  }

}

