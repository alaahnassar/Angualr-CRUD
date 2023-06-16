import { Iproduct } from './../models/iproduct';
import { products } from './../models/products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string="http://localhost:3000/posts"

  constructor(private http:HttpClient) { }

  getProducts():any{
    return this.http.get(this.url)
  }

  getProductById(id:number){
    return this.http.get(`${this.url}/${id}`)
    // return products.filter((product)=>product.id==id)[0]
  }
  addProduct(product:any){
    return this.http.post(this.url,product)
  }
  editProduct(id:number,product:any){
    return this.http.put(`${this.url}/${id}`,product)
  }
  deleteProduct(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }


  // addproduct(obj:Iproduct){
  //   products.push(obj)
  // }



}
