import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServUrl}/product/all`);
  }

  public getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiServUrl}/product/find/${id}`);
  }
  
}
