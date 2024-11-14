import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  urlImagem = 'https://picsum.photos/seed/picsum/400/200';

  cursoAngular: boolean = true;

  valorAtual: string = '';
  valorSalvo = '';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('botão clicado');
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }
  constructor() {}

  ngOnInit(): void {}
}
