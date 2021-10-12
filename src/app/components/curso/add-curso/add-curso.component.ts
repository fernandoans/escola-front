import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Curso } from 'src/app/models/curso.model';
import { Professor } from 'src/app/models/professor.model';
import { CursoService } from 'src/app/services/curso.service';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  curso: Curso = {
    nome: '',
    descricao: '',
    cargahoraria: 0,
    qtdalunos: 0,
    datainicio: '',
    numsala: 0,
    professor: {
      matricula: 0,
      nome: ''
    }
  };
  submitted = false;

  constructor(
    private cursoService: CursoService,
    private professorService: ProfessorService) {
  }

  ngOnInit(): void {
  }

  saveCurso(): void {
    const data = {
      id: this.curso.id,
      nome: this.curso.nome,
      descricao: this.curso.descricao,
      cargahoraria: this.curso.cargahoraria,
      qtdalunos: this.curso.qtdalunos,
      datainicio: this.curso.datainicio,
      numsala: this.curso.numsala,
      professor: this.curso.professor
    };

    this.cursoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCurso(): void {
    this.submitted = false;
    this.curso = {
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
  }

  /* Tabelas Extenas */

  professorNome = new FormControl();
  professorLoading = false;
  nomeProf?= '';
  lstProfessor: Professor[] = [];
  lstProfessorVazio: Professor[] = [];

  importProfessores() {
    this.professorLoading = true;
    const nome = this.professorNome.value.replace(/ /g, '+');
    this.professorService.findByNome(nome).subscribe(m => {
      this.lstProfessor = m;
      this.professorLoading = false;
    });
  }

  importSelProfessor(professor: Professor) {
    this.curso.professor = professor;
    this.nomeProf = professor.nome;
    this.lstProfessor = this.lstProfessorVazio;
  }
}
