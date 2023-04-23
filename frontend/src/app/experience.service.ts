import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { experience } from './models/experience';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {
  private API_URL = `${environment.API_BASE}/experiencia`

  constructor(
      private _httpClient: HttpClient
  ) { }

  async get(id:number){
    this._httpClient.get<experience>(`${this.API_URL}/get?id=${id}`).toPromise();
  }

  async post(experience:experience){
    return this._httpClient.post(`${this.API_URL}/crear`,experience).toPromise();
  }
  
  async put(experience:experience){
    return this._httpClient.put(`${this.API_URL}/editar`,experience).toPromise();
  }
   
  async delete(id:number){
    return this._httpClient.delete(`${this.API_URL}/borrar?id=${id}`).toPromise();
  }
  
  async getAll() {
    return this._httpClient.get<experience[]>(`${this.API_URL}/todos`).toPromise();
  }
}
