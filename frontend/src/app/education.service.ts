import { Injectable } from '@angular/core';
import { Education } from './models/education';
import {HttpClient } from "@angular/common/http"
import {environment} from 'src/environments/enviroment'
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})

export class EducationService {
  private API_URL = `${environment.API_BASE}/educacion`

  constructor(
      private _httpClient: HttpClient
  ) { }

  async get(id:number):Promise<Observable<Education[]>> {
    const url = `${this.API_URL}/${id}`;
    return this._httpClient.get<Education[]>(url);
  }

  async post(education:Education){
    return this._httpClient.post(`${this.API_URL}/crear`,education).toPromise();
  }
  
  async put(education:Education){
    return this._httpClient.put(`${this.API_URL}/editar`,education).toPromise();
  }
  async putList(listEducation:Education[]):Promise<Observable<Object>>{
    const url = `${this.API_URL}/editarlista`;
     return this._httpClient.post(url,listEducation);
  }
   
  async delete(id:number):Promise<Observable<Object>>{
    const url =`${this.API_URL}/borrar/${id}`;

    return this._httpClient.delete(url);
  }
  
  async getAll() {
    
    return this._httpClient.get<Education[]>(`${this.API_URL}/todos`).toPromise();
  } 

}