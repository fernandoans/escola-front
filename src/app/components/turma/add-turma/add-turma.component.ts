import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Curso } from 'src/app/models/curso.model';
import { Professor } from 'src/app/models/professor.model';
import { CursoService } from 'src/app/services/curso.service';
import { ProfessorService } from 'src/app/services/professor.service';
import { Turma } from 'src/app/models/turma.model';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-add-turma',
  templateUrl: './add-turma.component.html',
  styleUrls: ['./add-turma.component.css']
})
export class AddTurmaComponent implements OnInit {

  turma: Turma = {
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
  submitted = false;

  constructor(
    private turmaService: TurmaService,
    private cursoService: CursoService,
    private professorService: ProfessorService) {
  }

  ngOnInit(): void {
  }

  saveTurma(): void {
    const data = {
      id: this.turma.id,
      nome: this.turma.nome,
      cargahoraria: this.turma.cargahoraria,
      numsala: this.turma.numsala,
      datainicio: this.turma.datainicio,
      datatermino: this.turma.datatermino,
      professor: this.turma.professor,
      curso: this.turma.curso
    };

    this.turmaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTurma(): void {
    this.submitted = false;
    this.turma = {
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
    this.turma.professor = professor;
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
    this.turma.curso = curso;
    this.nomeCurso = curso.nome;
    this.lstCurso = this.lstCursoVazio;
  }
}
