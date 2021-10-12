import { Curso } from "./curso.model";
import { Professor } from "./professor.model";

export class Turma {
  id?: number;
  nome?: string;
  cargahoraria?: number;
  numsala?: number;
  datainicio?: string;
  datatermino?: string;
  professor?: Professor;
  curso?: Curso;
}
