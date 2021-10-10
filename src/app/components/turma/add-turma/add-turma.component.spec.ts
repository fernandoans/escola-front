import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTurmaComponent } from './add-turma.component';

describe('AddTurmaComponent', () => {
  let component: AddTurmaComponent;
  let fixture: ComponentFixture<AddTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTurmaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
