import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Product } from '../interfaces/product';
import { ProductFilterPipe } from '../pipes/product-filter-pipe';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [
    MatCardModule, 
    FormsModule, 
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    ProductFilterPipe,
    ProductItem
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList {
   showImage = true

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  filterSearch = ''; // Podríamos poner un valor por defecto

  title = 'Mi lista de productos';
  headers = {
    image: 'Imagen',
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