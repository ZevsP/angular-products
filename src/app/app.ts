import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Hello} from './hello/hello';
import { ProductList } from './product-list/product-list'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-products');
}
