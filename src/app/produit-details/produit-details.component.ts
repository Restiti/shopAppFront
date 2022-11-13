import { registerLocaleData } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../service/home.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {
  public product!: Product;
  public id: number = -1;
  constructor(private productService: ProductService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.productService.getProductById(this.id).subscribe({
      next: (product: Product)=> {this.product = product},
      error: (error: HttpErrorResponse) => {alert(error.message)}
      //;
    });
  }

}
