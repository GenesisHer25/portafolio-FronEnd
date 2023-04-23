import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { image } from './models/image';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  private API_URL = `${environment.API_BASE}/imagen`

  constructor(
      private _httpClient: HttpClient
  ) { }

  async get(id:number){
    this._httpClient.get<image>(`${this.API_URL}/get?id=${id}`).toPromise();
  }

  async post(image:image){
    return this._httpClient.post(`${this.API_URL}/crear`,image).toPromise();
  }
  
  async put(image:image){
    return this._httpClient.put(`${this.API_URL}/editar`,image).toPromise();
  }
   
  async delete(id:number){
    return this._httpClient.delete(`${this.API_URL}/borrar?id=${id}`).toPromise();
  }
  
  async getAll() {
    return this._httpClient.get<image[]>(`${this.API_URL}/todos`).toPromise();
  } 

}
