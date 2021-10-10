import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from 'src/app/models/professor.model';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.css']
})
export class ProfessorDetailsComponent implements OnInit {
  currentProfessor: Professor = {
    matricula: 0,
    nome: '',
    datanascimento: '',
    sexo: 'M',
    contato: '',
    email: '',
    disciplina: ''
  };
  message = '';

  constructor(
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProfessor(this.route.snapshot.params.id);
  }

  getProfessor(id: string): void {
    this.professorService.get(id)
      .subscribe(
        data => {
          this.currentProfessor = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateProfessor(): void {
    this.message = '';

    this.professorService.update(this.currentProfessor.matricula, this.currentProfessor)
      .subscribe(
        response => {
          this.message = response.message ? response.message : 'Professor modificado corretamente!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProfessor(): void {
    this.professorService.delete(this.currentProfessor.matricula)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/professor']);
        },
        error => {
          console.log(error);
        });
  }
}
