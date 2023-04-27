// candidate.service.ts
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/enviroment'
import {Candidate} from 'src/app/models/candidate'
import {HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  
  private API_URL = `${environment.API_BASE}/aspirante`

  constructor(
        private _httpClient: HttpClient
    ) { }

  getCandidate() {
    const candidate:Candidate = {
      id:1,
      nombre: '',
      cargo:'Desarrolldor',
      descripcion:'Dirección del candidato',
      foto: 'https://localhost:56550/assets/imagen.jpg'
    };

    return candidate;
  } 

    async get(id:number):Promise<Observable<Candidate>>   {
        const url =  `${this.API_URL}/obtener/${id}`;
        return this._httpClient.get<Candidate>(url);
      
    }
    
    async post(candidate:Candidate){
      const url =  `${this.API_URL}/crear`;
      return this._httpClient.post(url,candidate);
    }
    
    async put(candidate:Candidate):Promise<Observable<Object>>{
      const url = `${this.API_URL}/editar`;
      return this._httpClient.put(url,candidate);
    }
    
    async delete(id:number):Promise<Observable<Object>>{
      const url = `${this.API_URL}/borrar?id=${id}`;
      return this._httpClient.delete(url);
    }
  
    async getAll() {
      const url = `${this.API_URL}/todos`;
      return this._httpClient.get<Candidate[]>(url);
    } 
}
