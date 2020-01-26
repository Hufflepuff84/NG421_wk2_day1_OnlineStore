import { Injectable } from '@angular/core';
import {Productinterface} from "./../interfaces/productinterface";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  shoppingcart: Productinterface[];
  products

  constructor() { }
}
