import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../services/value.service';

@Component({
  selector: 'app-computador',
  template: `
    <button (click)="clicar()"> Ligar PC...</button>
    <span>{{ situacao }}</span>
    <h1> Computador do {{ usuario }} </h1>`
})
export class ComputadorComponent implements OnInit {
  
  ligado = false;
  usuario: any;

  constructor(private valueService: ValueService) { }

  ngOnInit() {
    this.usuario = this.valueService.getUser(); 
  }

  clicar() {
    this.ligado = !this.ligado;
  }
  
  get situacao() { return this.ligado ? 'Está ligado' : 'Está Desligado!'};

}
