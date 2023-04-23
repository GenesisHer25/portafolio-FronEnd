import { Injectable } from '@angular/core';
import { project } from './models/project';
import {HttpClient } from "@angular/common/http"
import {environment} from 'src/environments/enviroment'

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private API_URL = `${environment.API_BASE}/proyecto`

  constructor(
      private _httpClient: HttpClient
  ) { }

  async get(id:number){
    this._httpClient.get<project>(`${this.API_URL}/get?id=${id}`).toPromise();
  }

  async post(project:project){
    return this._httpClient.post(`${this.API_URL}/crear`,project).toPromise();
  }
  
  async put(project:project){
    return this._httpClient.put(`${this.API_URL}/editar`,project).toPromise();
  }
   
  async delete(id:number){
    return this._httpClient.delete(`${this.API_URL}/borrar?id=${id}`).toPromise();
  }
  
  async getAll() {
    return this._httpClient.get<project[]>(`${this.API_URL}/todos`).toPromise();
  } 

}
