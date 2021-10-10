import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from 'src/app/models/turma.model';

@Component({
  selector: 'app-turma-details',
  templateUrl: './turma-details.component.html',
  styleUrls: ['./turma-details.component.css']
})
export class TurmaDetailsComponent implements OnInit {
  currentTurma: Turma = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTurma(this.route.snapshot.params.id);
  }

  getTurma(id: string): void {
    this.turmaService.get(id)
      .subscribe(
        data => {
          this.currentTurma = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTurma.title,
      description: this.currentTurma.description,
      published: status
    };

    this.message = '';

    this.turmaService.update(this.currentTurma.id, data)
      .subscribe(
        response => {
          this.currentTurma.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'This turma was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateTurma(): void {
    this.message = '';

    this.turmaService.update(this.currentTurma.id, this.currentTurma)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This turma was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTurma(): void {
    this.turmaService.delete(this.currentTurma.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/turma']);
        },
        error => {
          console.log(error);
        });
  }
}
