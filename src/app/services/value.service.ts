import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  nome = 'Joao'
  constructor() { }

  getValue(value) {
    return value;
  }

  getUser() {
    return this.nome;
  }
}
