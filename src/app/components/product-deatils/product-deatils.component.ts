import { Iproduct } from './../../models/iproduct';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-deatils',
  templateUrl: './product-deatils.component.html',
  styleUrls: ['./product-deatils.component.scss']
})
export class ProductDeatilsComponent implements OnInit {
  id:number=0
  product:any |null=null
  constructor(private productId:ProductsService, private route:ActivatedRoute ){}
  ngOnInit(): void {
   this.id=Number(this.route.snapshot.paramMap.get('id'))
  //  this.product=this.productId.getProductById(this.id)

this.productId.getProductById(this.id).subscribe({
  next:(res)=>{this.product=res},
  error:(err)=>{
    console.log(err)
  }
},)
  }

}
