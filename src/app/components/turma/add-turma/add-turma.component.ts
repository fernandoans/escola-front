import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/models/turma.model';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-add-turma',
  templateUrl: './add-turma.component.html',
  styleUrls: ['./add-turma.component.css']
})
export class AddTurmaComponent implements OnInit {
  turma: Turma = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private turmaService: TurmaService) { }

  ngOnInit(): void {
  }

  saveTurma(): void {
    const data = {
      title: this.turma.title,
      description: this.turma.description
    };

    this.turmaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTurma(): void {
    this.submitted = false;
    this.turma = {
      title: '',
      description: '',
      published: false
    };
  }

}
