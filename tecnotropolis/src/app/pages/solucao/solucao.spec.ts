import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucaoComponent } from './solucao';

describe('Solucao', () => {
  let component: SolucaoComponent;
  let fixture: ComponentFixture<SolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolucaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolucaoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
