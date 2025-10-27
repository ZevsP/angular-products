import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  imports: [MatCardModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  title = 'Mi lista de productos';
  headers = {
    description: 'Producto',
    price: 'Precio',
    available: 'Disponible'
  }

   products: Product[] = [
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2024-10-03',
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5
    }, {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2024-09-15',
      price: 96.95,
      imageUrl: 'assets/motherboard.png',
      rating: 4
    }, {
    id: 3,
    description: 'Kingston DDR4 3200 MHz 16GB 2x8GB CL16',
    available: '2024-11-10',
    price: 42.95,
    imageUrl: 'assets/ram.png',
    rating: 4
  }
  ];
}
