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
  imagem: string="data:image/jpeg;base64,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";

  constructor() { }

  ngOnInit(): void {
  }

}
