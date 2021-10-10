import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/models/turma.model';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})
export class TurmaListComponent implements OnInit {
  turmas?: Turma[];
  currentTurma?: Turma;
  currentIndex = -1;
  title = '';

  constructor(private turmaService: TurmaService) { }

  ngOnInit(): void {
    this.retrieveTurmas();
  }

  retrieveTurmas(): void {
    this.turmaService.getAll()
      .subscribe(
        data => {
          this.turmas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTurmas();
    this.currentTurma = undefined;
    this.currentIndex = -1;
  }

  setActiveTurma(turma: Turma, index: number): void {
    this.currentTurma = turma;
    this.currentIndex = index;
  }

  removeAllTurmas(): void {
    this.turmaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentTurma = undefined;
    this.currentIndex = -1;

    this.turmaService.findByTitle(this.title)
      .subscribe(
        data => {
          this.turmas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
