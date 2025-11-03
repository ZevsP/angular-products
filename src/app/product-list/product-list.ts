import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductFilterPipe } from '../pipes/product-filter-pipe';
import { ProductItem } from '../product-item/product-item';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [
    MatCardModule,
    CommonModule, 
    FormsModule, 
    ProductFilterPipe,
    ProductItem
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductList {
  title = 'Mi lista de productos';
  headers = {
    image: 'Imagen',
    description: 'Producto',
    price: 'Precio',
    available: 'Disponible'
  } 
  showImage = true;

  filterSearch = ''; // Podríamos poner un valor por defecto

  products: Product[] = [];

  private productService = inject(ProductService);

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }
}