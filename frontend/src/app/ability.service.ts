import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { Ability } from './models/ability';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class AbilityService {
  private API_URL = `${environment.API_BASE}/habilidad`;

  constructor(private httpClient: HttpClient) { }

  async get(id:number):Promise<Observable<Ability[]>>  {
    const url =  `${this.API_URL}/${id}`;
    return this.httpClient.get<Ability[]>(url);
 
  }

  saveAll(abilities: Ability[]) {
    const url =  `${this.API_URL}/editarlista`;
    return this.httpClient.post(url, abilities);
  }
  async delete(id: number): Promise<Observable<Object>> {
    const url = `${this.API_URL}/borrar/${id}`;
    return this.httpClient.delete(url);
  }
}
