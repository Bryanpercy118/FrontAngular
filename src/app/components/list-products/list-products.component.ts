import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {
      id: 1,
      name:'Coca cola',
      description: 'Gaseosa',
      price: 10,
      stock: 100
    },
    {
      id: 2, 
      name:'Pepsi',
      description: 'Gaseosa',
      price: 10,
      stock: 100
    }

  ];
}
