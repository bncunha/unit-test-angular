import { Injectable } from '@angular/core';
import { ValueService } from './value.service';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor(private valueService: ValueService) { }

  dobro(valor) {
    return this.valueService.getValue(valor) * 2;
  }
}
