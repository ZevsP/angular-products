import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], filterBy: string): Product[] {
    if (filterBy) {
      // filterBy = filterBy.toLocaleLowerCase();
      return products.filter((product: Product) => { 
        return this.includesText(product.description, filterBy)
        })
    }
    return products;
  }

  includesText(originalText: string, text: string): boolean {

    const lowercaseOriginal = originalText.toLocaleLowerCase()
    const lowercaseText = text.toLocaleLowerCase()

    return lowercaseOriginal.includes(lowercaseText)
  }

}