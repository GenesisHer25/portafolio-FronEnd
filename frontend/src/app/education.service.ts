import { Injectable } from '@angular/core';
import { education } from './models/education';
import {HttpClient } from "@angular/common/http"
import {environment} from 'src/environments/enviroment'

@Injectable({
  providedIn: 'root'
})

export class EducationService {
  private API_URL = `${environment.API_BASE}/educacion`

  constructor(
      private _httpClient: HttpClient
  ) { }

  async get(id:number){
    this._httpClient.get<education>(`${this.API_URL}/get?id=${id}`).toPromise();
  }

  async post(education:education){
    return this._httpClient.post(`${this.API_URL}/crear`,education).toPromise();
  }
  
  async put(education:education){
    return this._httpClient.put(`${this.API_URL}/editar`,education).toPromise();
  }
   
  async delete(id:number){
    return this._httpClient.delete(`${this.API_URL}/borrar?id=${id}`).toPromise();
  }
  
  async getAll() {
    return this._httpClient.get<education[]>(`${this.API_URL}/todos`).toPromise();
  } 

}
