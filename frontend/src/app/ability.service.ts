import { Injectable } from '@angular/core';
import { ability } from './models/ability';
import {HttpClient } from "@angular/common/http"
import {environment} from 'src/environments/enviroment'

@Injectable({
  providedIn: 'root'
})

export class AbilityService {

  private API_URL = `${environment.API_BASE}/habilidad`

    constructor(
        private _httpClient: HttpClient
    ) { }

    async get(id:number){
      this._httpClient.get<ability>(`${this.API_URL}/get?id=${id}`).toPromise();
    }

    async post(ability:ability){
      return this._httpClient.post(`${this.API_URL}/crear`,ability).toPromise();
    }
    
    async put(ability:ability){
      return this._httpClient.put(`${this.API_URL}/editar`,ability).toPromise();
    }
     
    async delete(id:number){
      return this._httpClient.delete(`${this.API_URL}/borrar?id=${id}`).toPromise();
    }
    
    async getAll() {
      return this._httpClient.get<ability[]>(`${this.API_URL}/todos`).toPromise();
    } 
  
  }
