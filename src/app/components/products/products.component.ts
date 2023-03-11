import { products } from './../../models/products';
import { Iproduct } from './../../models/iproduct';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products:any=[]
  constructor(private productser:ProductsService){
    // window.location.reload()
  }
  ngOnInit(): void {

   this.productser.getProducts().subscribe({
    next:(res:any)=>{this.products=res},
    error:(err:any)=>{console.log(err)}
   })
  }
  removeProductById(id:number)
  {
    this.productser.deleteProduct(id).subscribe({
      next:(value)=> {
        this.products=this.products.filter(
          (product:any)=>product.id != id
        )
          // this.products=value
      },
    })
    // const index=products.findIndex((obj)=>obj.id===id)
    // products.splice(index,1)
    // return products
  }


}
