import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';

const baseUrl = 'http://localhost:8080/laboratorio/aluno/';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(baseUrl);
  }

  get(matricula: any): Observable<Aluno> {
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

  findByNome(nome: any): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${baseUrl}nome/${nome}`);
  }
}
