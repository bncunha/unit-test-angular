import { TestBed, inject } from '@angular/core/testing';

import { DemoServiceService } from './demo-service.service';
import { ValueService } from './value.service';

describe('DemoServiceService', () => {
  let serviceTeste: DemoServiceService; // service que será testado
  let valueService: jasmine.SpyObj<ValueService>; // service que depente
  beforeEach(() => {
    // crio um spy do tip 'ValueService' que tem a função 'GetValue'
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);
    // mapeio as dependencias do service
    TestBed.configureTestingModule({
      providers: [
        DemoServiceService, 
        { provide: ValueService, useValue: spy }]
    });
    // injeto os services
    serviceTeste = TestBed.get(DemoServiceService);
    valueService = TestBed.get(ValueService);
  });

  // faço o teste da função dobro
  it('deve retornar o dobro do valor passado utilizando spy', () => {
    valueService.getValue.and.returnValue(20);
    expect(serviceTeste.dobro(20)).toBe(40);
    expect(valueService.getValue).toHaveBeenCalled();
    expect(valueService.getValue).toHaveBeenCalledWith(20);
  });
});