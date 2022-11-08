import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mon shop';
  
  public products: Product[] = [];

  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts():void{
    this.productService.getProducts().subscribe({
      next: (response: Product[]) => {
        this.products = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
