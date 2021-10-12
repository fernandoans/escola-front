import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTurmaAlunoComponent } from './add-turmaaluno.component';

describe('AddTurmaAlunoComponent', () => {
  let component: AddTurmaAlunoComponent;
  let fixture: ComponentFixture<AddTurmaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTurmaAlunoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTurmaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
