import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno.model';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {
  alunos?: Aluno[];
  currentAluno?: Aluno;
  currentIndex = -1;
  nome = '';

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.retrievealunos();
  }

  retrievealunos(): void {
    this.alunoService.getAll()
      .subscribe(
        data => {
          this.alunos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievealunos();
    this.currentAluno = undefined;
    this.currentIndex = -1;
  }

  setActiveAluno(aluno: Aluno, index: number): void {
    this.currentAluno = aluno;
    this.currentIndex = index;
  }

  removeAllAlunos(): void {
    this.alunoService.deleteAll()
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
    this.currentAluno = undefined;
    this.currentIndex = -1;

    this.alunoService.findByNome(this.nome)
      .subscribe(
        data => {
          this.alunos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
