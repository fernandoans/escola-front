import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor.model';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit {
  professor: Professor = {
    matricula: 0,
    nome: '',
    datanascimento: '',
    sexo: 'M',
    contato: '',
    email: '',
    disciplina: ''
  };
  submitted = false;

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
  }

  saveProfessor(): void {
    const data = {
      matricula: this.professor.matricula,
      nome: this.professor.nome,
      datanascimento: this.professor.datanascimento,
      sexo: this.professor.sexo,
      contato: this.professor.contato,
      email: this.professor.email,
      disciplina: this.professor.disciplina
    };

    this.professorService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProfessor(): void {
    this.submitted = false;
    this.professor = {
      matricula: 0,
      nome: '',
      datanascimento: '',
      sexo: 'M',
      contato: '',
      email: '',
      disciplina: ''
    };
  }
}