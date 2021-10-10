import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurmaDetailsComponent } from './turma-details.component';

describe('TurmaDetailsComponent', () => {
  let component: TurmaDetailsComponent;
  let fixture: ComponentFixture<TurmaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurmaDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
