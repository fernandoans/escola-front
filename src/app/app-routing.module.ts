import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorListComponent } from './components/professor/professor-list/professor-list.component';
import { ProfessorDetailsComponent } from './components/professor/professor-details/professor-details.component';
import { AddProfessorComponent } from './components/professor/add-professor/add-professor.component';
import { AlunoListComponent } from './components/aluno/aluno-list/aluno-list.component';
import { AlunoDetailsComponent } from './components/aluno/aluno-details/aluno-details.component';
import { AddAlunoComponent } from './components/aluno/add-aluno/add-aluno.component';
import { CursoListComponent } from './components/curso/curso-list/curso-list.component';
import { CursoDetailsComponent } from './components/curso/curso-details/curso-details.component';
import { AddCursoComponent } from './components/curso/add-curso/add-curso.component';
import { TurmaListComponent } from './components/turma/turma-list/turma-list.component';
import { TurmaDetailsComponent } from './components/turma/turma-details/turma-details.component';
import { AddTurmaComponent } from './components/turma/add-turma/add-turma.component';
import { AddTurmaAlunoComponent } from './components/turmaaluno/add-turmaaluno/add-turmaaluno.component';

const routes: Routes = [
  { path: '', redirectTo: 'turma', pathMatch: 'full' },
  { path: 'professor', component: ProfessorListComponent },
  { path: 'professor/:id', component: ProfessorDetailsComponent },
  { path: 'addprofessor', component: AddProfessorComponent },
  { path: 'curso', component: CursoListComponent },
  { path: 'curso/:id', component: CursoDetailsComponent },
  { path: 'addcurso', component: AddCursoComponent },
  { path: 'aluno', component: AlunoListComponent },
  { path: 'aluno/:id', component: AlunoDetailsComponent },
  { path: 'addaluno', component: AddAlunoComponent },
  { path: 'turma', component: TurmaListComponent },
  { path: 'turma/:id', component: TurmaDetailsComponent },
  { path: 'addturma', component: AddTurmaComponent },
  { path: 'turmaaluno/:id', component: AddTurmaAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
