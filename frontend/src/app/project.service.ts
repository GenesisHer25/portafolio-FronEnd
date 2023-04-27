// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './models/project';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private API_URL = `${environment.API_BASE}/proyecto`;

  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Project[]> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<Project[]>(url);
  }

  post(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(`${this.API_URL}/crear`, project);
  }

  put(project: Project): Observable<Project> {
    return this.httpClient.put<Project>(`${this.API_URL}/editar`, project);
  }

  putList(listProject: Project[]): Observable<Object> {
    const url = `${this.API_URL}/editarlista`;
    return this.httpClient.post(url, listProject);
  }

  delete(id: number): Observable<Object> {
    const url = `${this.API_URL}/borrar/${id}`;
    return this.httpClient.delete(url);
  }
 
}
