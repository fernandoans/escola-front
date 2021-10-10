import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';

@Component({
  selector: 'app-aluno-details',
  templateUrl: './aluno-details.component.html',
  styleUrls: ['./aluno-details.component.css']
})
export class AlunoDetailsComponent implements OnInit {
  currentAluno: Aluno = {
    matricula: 0,
    nome: '',
    datanascimento: '',
    sexo: 'M',
    contato: '',
    email: ''
  };
  message = '';

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAluno(this.route.snapshot.params.id);
  }

  getAluno(id: string): void {
    this.alunoService.get(id)
      .subscribe(
        data => {
          this.currentAluno = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAluno(): void {
    this.message = '';

    this.alunoService.update(this.currentAluno.matricula, this.currentAluno)
      .subscribe(
        response => {
          this.message = response.message ? response.message : 'Aluno modificado corretamente!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAluno(): void {
    this.alunoService.delete(this.currentAluno.matricula)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/aluno']);
        },
        error => {
          console.log(error);
        });
  }
}
