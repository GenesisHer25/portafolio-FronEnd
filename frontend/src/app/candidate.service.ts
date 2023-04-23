import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http"
import {candidate} from 'src/app/models/candidate'
import {environment} from 'src/environments/enviroment'

@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  private API_URL = `${environment.API_BASE}/aspirante`

    constructor(
        private _httpClient: HttpClient
    ) { }

    async get(id:number){
      this._httpClient.get<candidate>(`${this.API_URL}/get?id=${id}`).toPromise();
    }
    
    async post(candidate:candidate){
      return this._httpClient.post(`${this.API_URL}/crear`,candidate).toPromise();
    }
    
    async put(candidate:candidate){
      return this._httpClient.put(`${this.API_URL}/editar`,candidate).toPromise();
    }
    
    async delete(id:number){
      return this._httpClient.delete(`${this.API_URL}/borrar?id=${id}`).toPromise();
    }
  
    async getAll() {
      return this._httpClient.get<candidate[]>(`${this.API_URL}/todos`).toPromise();
    } 

}
