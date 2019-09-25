import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/getCategories`);
  }

  getProducts(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/getProducts`);
  }

  getFeatured(): Observable <any> {
    return this.http.get(`http://localhost:3000/api/getFeatured`);
  }

  addFeatured(product_id: number): Observable <any> {
    const params: any = {product_id};
    return this.http.post(`http://localhost:3000/api/addFeatured`, params);
  }

  searchProduct(keyword: string): Observable <any> {
    const params: any = {keyword};
    return this.http.post(`http://localhost:3000/api/searchProduct`, params);
  }

  getProduct(product_id: number): Observable <any> {
    const params: any = {product_id};
    return this.http.post('http://localhost:3000/api/getProduct', params);
  }

}