import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://127.0.0.1:4000/api/products/';

  constructor(
    private http: HttpClient
  ) { }


  // GET ALL PRODUCTS
  getProducts() {
    return this.http.get<Product>(this.url);
  }

  // GET ONE PRODUCT
  getProduct(id: string) {
    return this.http.get<Product>(this.url + id);
  }


  // POST PRODUCT
  postProduct(data: Product) {
    return this.http.post<Product>(this.url, data);
  }

  // UPDATE PRODUCT
  updateProducts(id: string, data: Product) {
    return this.http.put<Product>(this.url + id, data);
  }

  // DELETE PRODUCT
  deleteProduct(id?: string) {
    return this.http.delete<Product>(this.url + id);
  }



}
