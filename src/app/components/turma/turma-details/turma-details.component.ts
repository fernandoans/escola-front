import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Curso } from 'src/app/models/curso.model';
import { Professor } from 'src/app/models/professor.model';
import { CursoService } from 'src/app/services/curso.service';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from 'src/app/models/turma.model';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-turma-details',
  templateUrl: './turma-details.component.html',
  styleUrls: ['./turma-details.component.css']
})
export class TurmaDetailsComponent implements OnInit {

  currentTurma: Turma = {
    id: 0,
    nome: '',
    cargahoraria: 0,
    numsala: 0,
    datainicio: '',
    datatermino: '',
    professor: {
      matricula: 0,
      nome: ''
    },
    curso: {
      id: 0,
      nome: ''
    }
  };
  message = '';

  constructor(
    private turmaService: TurmaService,
    private professorService: ProfessorService,
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTurma(this.route.snapshot.params.id);
  }

  getTurma(id: string): void {
    this.turmaService.get(id)
      .subscribe(
        data => {
          this.currentTurma = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTurma(): void {
    this.message = '';

    this.turmaService.update(this.currentTurma.id, this.currentTurma)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Turma modificada corretamente!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTurma(): void {
    this.turmaService.delete(this.currentTurma.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/turma']);
        },
        error => {
          console.log(error);
        });
  }

  /* Tabelas Extenas */

  professorNome = new FormControl();
  professorLoading = false;
  nomeProf?= '';
  lstProfessor: Professor[] = [];
  lstProfessorVazio: Professor[] = [];

  cursoNome = new FormControl();
  cursoLoading = false;
  nomeCurso?= '';
  lstCurso: Curso[] = [];
  lstCursoVazio: Curso[] = [];

  importProfessores() {
    this.professorLoading = true;
    const nome = this.professorNome.value.replace(/ /g, '+');
    this.professorService.findByNome(nome).subscribe(m => {
      this.lstProfessor = m;
      this.professorLoading = false;
    });
  }

  importSelProfessor(professor: Professor) {
    this.currentTurma.professor = professor;
    this.nomeProf = professor.nome;
    this.lstProfessor = this.lstProfessorVazio;
  }

  importCursos() {
    this.cursoLoading = true;
    const nome = this.cursoNome.value.replace(/ /g, '+');
    this.cursoService.findByNome(nome).subscribe(m => {
      this.lstCurso = m;
      this.cursoLoading = false;
    });
  }

  importSelCurso(curso: Curso) {
    this.currentTurma.curso = curso;
    this.nomeCurso = curso.nome;
    this.lstCurso = this.lstCursoVazio;
  }

}
