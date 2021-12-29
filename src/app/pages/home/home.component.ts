import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   users = [
    {id: 1, name: 'Gabriel Alberto'},
    {id: 2, name: 'Pedro Afonso'},
    {id: 2, name: 'Mariana Silva'},
    {id: 2, name: 'André Cardoso'},
    {id: 3, name: 'Julia'}
  ];

  constructor(private service: ProductsService) { }

  ngOnInit(){
    this.service.ProductsService()
.subscribe( this.users = dados)
  }
}
