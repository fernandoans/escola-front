import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor.model';

const baseUrl = 'http://localhost:8080/laboratorio/professor/';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(baseUrl);
  }

  get(matricula: any): Observable<Professor> {
    return this.http.get(`${baseUrl}${matricula}`);
  }

  create(data: any): Observable<any> {
    console.log(data);
    return this.http.post(baseUrl, data);
  }

  update(matricula: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}${matricula}`, data);
  }

  delete(matricula: any): Observable<any> {
    return this.http.delete(`${baseUrl}${matricula}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNome(nome: any): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${baseUrl}nome/${nome}`);
  }
}
