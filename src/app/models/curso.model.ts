import { Professor } from "./professor.model";

export class Curso {
  id?: number;
  nome?: string;
  descricao?: string;
  cargahoraria?: number;
  qtdalunos?: number;
  datainicio?: string;
  numsala?: number;
  professor?: Professor;
}
