import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
  cursos?: Curso[];
  currentCurso?: Curso;
  currentIndex = -1;
  nome = '';

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.retrieveCursos();
  }

  retrieveCursos(): void {
    this.cursoService.getAll()
      .subscribe(
        data => {
          this.cursos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCursos();
    this.currentCurso = undefined;
    this.currentIndex = -1;
  }

  setActiveCurso(curso: Curso, index: number): void {
    this.currentCurso = curso;
    this.currentIndex = index;
  }

  removeAllCursos(): void {
    this.cursoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.currentCurso = undefined;
    this.currentIndex = -1;

    this.cursoService.findByNome(this.nome)
      .subscribe(
        data => {
          this.cursos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
