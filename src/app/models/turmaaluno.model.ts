import { Aluno } from "./aluno.model";
import { Turma } from "./turma.model";

export class TurmaAluno {
    id?: number;
    turma?: Turma;
    aluno?: Aluno;
}