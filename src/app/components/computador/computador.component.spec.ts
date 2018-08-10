import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorComponent } from './computador.component';
import { ValueService } from '../../services/value.service';

describe('ComputadorComponent', () => {
  let component: ComputadorComponent;
  let fixture: ComponentFixture<ComputadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputadorComponent ]
    })
    fixture = TestBed.createComponent(ComputadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve exibir #Está Desligado!', () => {
    // pega o DOM
    let computador = fixture.nativeElement;
    // verifica se contém a string
    expect(computador.textContent).toContain('Está Desligado!');
  });
  
  it('deve ter um span com #Está Desligado!', () => {
    // pega o DOM
    let computador = fixture.nativeElement;
    // filtra apenas os spans
    let span = computador.querySelector('span');
    // verifica se contém a string
    expect(span.textContent).toContain('Está Desligado!');
  });

  it('verificar situação quando #clicar()', () => {
    // pega o DOM
    let computador = fixture.nativeElement;
    let span = computador.querySelector('span');
    // aciona o botão clicar
    component.clicar();
    // deve-se forçar o data-binding, para ver o novo valor da dom
    fixture.detectChanges();
    expect(span.textContent).toContain('Está ligado');
    // aciona o botão novamente
    component.clicar();
    fixture.detectChanges();
    expect(span.textContent).toContain('Está Desligado!');
  });
});

describe('Testando dependencias', () => {
  let valueServiceSpy: jasmine.SpyObj<ValueService>;
  let component: ComputadorComponent;
  let fixture: ComponentFixture<ComputadorComponent>;

  beforeEach(() => {
    let spy  = jasmine.createSpyObj('ValueService', ['getUser']);
    // configuro o módulo de teste
    TestBed.configureTestingModule({
      declarations: [ ComputadorComponent ],
      providers: [{provide: ValueService, useValue: spy}]
    })
    // crio o componente DOM
    fixture = TestBed.createComponent(ComputadorComponent);
    // pego a instancia
    component = fixture.componentInstance;
    // injeto o service
    valueServiceSpy = TestBed.get(ValueService);
  });

  it('deve iniciar com nome #Carlos', () => {
    valueServiceSpy.getUser.and.returnValue('Carlos');
    fixture.detectChanges();
    let conteudo = fixture.nativeElement;
    let h1 = conteudo.querySelector('h1');
    expect(component.usuario).toBeTruthy();
    expect(h1.textContent).toContain('Carlos');
  });
});