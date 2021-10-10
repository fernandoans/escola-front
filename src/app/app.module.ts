import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddProfessorComponent } from './components/professor/add-professor/add-professor.component';
import { ProfessorDetailsComponent } from './components/professor/professor-details/professor-details.component';
import { ProfessorListComponent } from './components/professor/professor-list/professor-list.component';

import { AddCursoComponent } from './components/curso/add-curso/add-curso.component';
import { CursoDetailsComponent } from './components/curso/curso-details/curso-details.component';
import { CursoListComponent } from './components/curso/curso-list/curso-list.component';

import { AddTurmaComponent } from './components/turma/add-turma/add-turma.component';
import { TurmaDetailsComponent } from './components/turma/turma-details/turma-details.component';
import { TurmaListComponent } from './components/turma/turma-list/turma-list.component';

import { AddAlunoComponent } from './components/aluno/add-aluno/add-aluno.component';
import { AlunoDetailsComponent } from './components/aluno/aluno-details/aluno-details.component';
import { AlunoListComponent } from './components/aluno/aluno-list/aluno-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProfessorComponent,
    ProfessorDetailsComponent,
    ProfessorListComponent,
    AddAlunoComponent,
    AlunoDetailsComponent,
    AlunoListComponent,
    AddCursoComponent,
    CursoDetailsComponent,
    CursoListComponent,
    AddTurmaComponent,
    TurmaDetailsComponent,
    TurmaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
