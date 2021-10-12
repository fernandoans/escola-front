import { TestBed } from '@angular/core/testing';

import { TurmaAlunoService } from './turmaaluno.service';

describe('TurmaAlunoService', () => {
  let service: TurmaAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurmaAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
