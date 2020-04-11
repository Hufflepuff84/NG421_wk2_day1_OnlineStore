import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';
import products from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
shoppingCart: IProduct[] 
products: IProduct[]


  constructor() { 
    this.products = products;  
  }


getProducts(): IProduct[] {
 return this.products;
}
getShoppingCart(): IProduct[]
{
  return this.products;
}
addtoCart(product: IProduct): IProduct[] {
  this.shoppingCart.push(product);
  return this.shoppingCart;
}
}
