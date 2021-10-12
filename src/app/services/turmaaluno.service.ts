import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turma } from '../models/turma.model';
import { TurmaAluno } from '../models/turmaaluno.model';

const baseUrl = 'http://localhost:8080/laboratorio/turmaAluno/';

@Injectable({
  providedIn: 'root'
})
export class TurmaAlunoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<TurmaAluno[]> {
    return this.http.get<TurmaAluno[]>(baseUrl);
  }

  get(id: any): Observable<TurmaAluno> {
    return this.http.get(`${baseUrl}${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTurma(id: any): Observable<TurmaAluno[]> {
    return this.http.get<TurmaAluno[]>(`${baseUrl}turma/${id}`);
  }
}
