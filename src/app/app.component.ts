import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';
import product from './products';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   products : IProduct[]

   constructor(private productService : ProductService) { }

   ngOnInit() {
    this.products=this.productService.getProducts()
   }
}