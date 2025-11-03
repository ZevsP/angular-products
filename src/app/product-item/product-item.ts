import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { UpperCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-product-item',
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
product: Product = {
    id: 0,
    description: 'Product placeholder',
    available: '2024-01-01',
    price: 9999,
    imageUrl: 'https://placehold.co/400',
    rating: 5
  };

  showImage = true;
}
