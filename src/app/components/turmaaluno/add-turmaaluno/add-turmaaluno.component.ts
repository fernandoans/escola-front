import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TurmaAluno } from 'src/app/models/turmaaluno.model';
import { TurmaAlunoService } from 'src/app/services/turmaaluno.service';
import { AlunoService } from 'src/app/services/aluno.service';
import { Aluno } from 'src/app/models/aluno.model';
import { ActivatedRoute } from '@angular/router';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-add-turmaaluno',
  templateUrl: './add-turmaaluno.component.html',
  styleUrls: ['./add-turmaaluno.component.css']
})
export class AddTurmaAlunoComponent implements OnInit {

  turmaaluno: TurmaAluno = {
    id: 0,
    turma: {
      id: 0,
      nome: ''
    },
    aluno: {
      matricula: 0,
      nome: ''
    }
  };
  submitted = false;
  idTurma = '';
  message = '';

  constructor(
    private turmaalunoService: TurmaAlunoService,
    private alunoService: AlunoService,
    private turmaService: TurmaService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.idTurma = this.route.snapshot.params.id;
    this.getTurma();
  }

  getTurma(): void {
    this.turmaService.get(this.idTurma)
      .subscribe(
        data => {
          this.turmaaluno.turma = data;
          console.log(data);
          console.log(this.turmaaluno);
        },
        error => {
          console.log(error);
        });
  }

  saveTurmaAluno(): void {
    const data = {
      id: this.turmaaluno.id,
      turma: this.turmaaluno.turma,
      aluno: this.turmaaluno.aluno
    };

    this.turmaalunoService.create(data)
      .subscribe(
        response => {
          this.message = response.message ? response.message : 'Aluno foi submetido com sucesso!';
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTurmaAluno(): void {
    this.submitted = false;
    this.turmaaluno = {
      id: 0,
      turma: {
        id: 0,
        nome: ''
      },
      aluno: {
        matricula: 0,
        nome: ''
      }
    };
    this.getTurma();
  }

  /* Tabelas Extenas */

  alunoNome = new FormControl();
  alunoLoading = false;
  nomeAlun?= '';
  lstAluno: Aluno[] = [];
  lstAlunoVazio: Aluno[] = [];

  importAlunos() {
    this.alunoLoading = true;
    const nome = this.alunoNome.value.replace(/ /g, '+');
    this.alunoService.findByNome(nome).subscribe(m => {
      this.lstAluno = m;
      this.alunoLoading = false;
    });
  }

  importSelAluno(aluno: Aluno) {
    this.turmaaluno.aluno = aluno;
    this.nomeAlun = aluno.nome;
    this.lstAluno = this.lstAlunoVazio;
  }
}
