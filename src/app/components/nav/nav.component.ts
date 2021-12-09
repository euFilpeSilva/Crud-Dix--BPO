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
  imagem: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5cytz1IXH7qTuunaPOtFtYUNQeLyqCc40w&usqp=CAU";

  constructor() { }

  ngOnInit(): void {
  }

}
