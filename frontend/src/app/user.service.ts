import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { user } from './models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private API_URL = `${environment.API_BASE}/usuario`

  constructor(
      private _httpClient: HttpClient
  ) { }

  async get(id:number){
    this._httpClient.get<user>(`${this.API_URL}/get?id=${id}`).toPromise();
  }

  async getAuthentication(id:string) {
    this._httpClient.get<user>(`${this.API_URL}/autenticacion`).toPromise();
  }
  
  async post(user:user){
    return this._httpClient.post(`${this.API_URL}/crear`,user).toPromise();
  }
  
  async put(user:user){
    return this._httpClient.put(`${this.API_URL}/editar`,user).toPromise();
  }
  
  async delete(id:number){
    return this._httpClient.delete(`${this.API_URL}/borrar?id=${id}`).toPromise();
  }

  async getAll() {
    return this._httpClient.get<user[]>(`${this.API_URL}/todos`).toPromise();
  } 

}
