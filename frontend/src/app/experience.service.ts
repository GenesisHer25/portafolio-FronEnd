import { Injectable } from '@angular/core';
import { Experience } from './models/experience';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private API_URL = `${environment.API_BASE}/experiencia`;

  constructor(private _httpClient: HttpClient) {}

  async get(id: number): Promise<Observable<Experience[]>> {
    const url = `${this.API_URL}/${id}`;
    return this._httpClient.get<Experience[]>(url);
  }

  async post(experience: Experience) {
    return this._httpClient
      .post(`${this.API_URL}/crear`, experience)
      .toPromise();
  }

  async put(experience: Experience) {
    return this._httpClient
      .put(`${this.API_URL}/editar`, experience)
      .toPromise();
  }

  async putList(listExperience: Experience[]): Promise<Observable<Object>> {
    const url = `${this.API_URL}/editarlista`;
    console.log(listExperience);
    return this._httpClient.post(url, listExperience);
  }

  async delete(id: number): Promise<Observable<Object>> {
    const url = `${this.API_URL}/borrar/${id}`;
    return this._httpClient.delete(url);
  }

  async getAll() {
    return this._httpClient
      .get<Experience[]>(`${this.API_URL}/todos`)
      .toPromise();
  }
}
