import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input()
  titulo: string="este é um titulo";
  @Input()
  descricao: string="esta é uma descrição de teste para o meu componente";
  @Input()
  subtitulo: string="este é um subtitulo";
  @Input()
  imagem: string="https://autoshoppingpontal.com.br/wp-content/uploads/2019/08/teste.png";

  constructor() { }

  ngOnInit(): void {
  }

}
