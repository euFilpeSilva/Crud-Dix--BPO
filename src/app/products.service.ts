import { Product } from './pages/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ProductsService() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

 createProduct(product : Product) : Observable<Product>{

   return this.http.post<Product>('http://localhost:3001/products', product);
}
}
