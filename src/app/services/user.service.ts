import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`localhost:3000/getUsers`);
  }

  userExist(email: string): Observable <any> {
    const params: any = {email: email};
    return this.http.post(`localhost:3000/getUsers`, params);
  }

  
}

