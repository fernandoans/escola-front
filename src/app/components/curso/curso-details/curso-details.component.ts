import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CursoService } from 'src/app/services/curso.service';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { Professor } from 'src/app/models/professor.model';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit {

  professorNome = new FormControl();
  professorLoading = false;
  nomeProf?= '';
  lstProfessor: Professor[] = [];
  lstProfessorVazio: Professor[] = [];

  currentCurso: Curso = {
    id: 0,
    nome: '',
    descricao: '',
    cargahoraria: 0,
    qtdalunos: 0,
    datainicio: '',
    numsala: 0,
    professor!: {
      matricula: 0,
      nome: ''
    }
  };
  message = '';

  constructor(
    private cursoService: CursoService,
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCurso(this.route.snapshot.params.id);
  }

  getCurso(id: string): void {
    this.cursoService.get(id)
      .subscribe(
        data => {
          this.currentCurso = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  importProfessores() {
    this.professorLoading = true;
    const nome = this.professorNome.value.replace(/ /g, '+');
    this.professorService.findByNome(nome).subscribe(m => {
      this.lstProfessor = m;
      this.professorLoading = false;
    });
  }

  updateCurso(): void {
    this.message = '';

    this.cursoService.update(this.currentCurso.id, this.currentCurso)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Curso modificado corretamente!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCurso(): void {
    this.cursoService.delete(this.currentCurso.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/curso']);
        },
        error => {
          console.log(error);
        });
  }

  importSelProfessor(professor: Professor) {
    this.currentCurso.professor = professor;
    this.nomeProf = professor.nome;
    this.lstProfessor = this.lstProfessorVazio;
  }
}
