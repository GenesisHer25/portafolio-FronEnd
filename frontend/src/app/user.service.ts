import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = `${environment.API_BASE}/usuario`;

  constructor(private httpClient: HttpClient) { }
  
  autentication(user:User): Observable<User> {
    const url = `${this.API_URL}/autentication`;
    return this.httpClient.post<User>(url,user);
  }
}
