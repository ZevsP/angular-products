import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return [
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
      },
      {
        id: 3,
        description: 'Kingston DDR4 3200 MHz 16GB 2x8GB CL16',
        available: '2024-11-10',
        price: 42.95,
        imageUrl: 'assets/ssd.jpg',
        rating: 4
      }
    ];
  }
  
}
