import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor.model';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  professores?: Professor[];
  currentProfessor?: Professor;
  currentIndex = -1;
  nome = '';

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.retrieveProfessores();
  }

  retrieveProfessores(): void {
    this.professorService.getAll()
      .subscribe(
        data => {
          this.professores = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveProfessores();
    this.currentProfessor = undefined;
    this.currentIndex = -1;
  }

  setActiveProfessor(professor: Professor, index: number): void {
    this.currentProfessor = professor;
    this.currentIndex = index;
  }

  removeAllProfessores(): void {
    this.professorService.deleteAll()
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
    this.currentProfessor = undefined;
    this.currentIndex = -1;

    this.professorService.findByNome(this.nome)
      .subscribe(
        data => {
          this.professores = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
