import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno.model';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.css']
})
export class AddAlunoComponent implements OnInit {
  aluno: Aluno = {
    matricula: 0,
    nome: '',
    datanascimento: '',
    sexo: 'M',
    contato: '',
    email: ''
  };
  submitted = false;
  message = '';

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
  }

  saveAluno(): void {
    const data = {
      matricula: this.aluno.matricula,
      nome: this.aluno.nome,
      datanascimento: this.aluno.datanascimento,
      sexo: this.aluno.sexo,
      contato: this.aluno.contato,
      email: this.aluno.email
    };

    this.alunoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.message = response.message ? response.message : 'Aluno foi submetido com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  newAluno(): void {
    this.submitted = false;
    this.aluno = {
      matricula: 0,
      nome: '',
      datanascimento: '',
      sexo: 'M',
      contato: '',
      email: ''
    };
  }
}