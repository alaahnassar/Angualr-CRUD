import { ProductsService } from './../../services/products.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Iproduct } from './../../models/iproduct';
import { products } from './../../models/products';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  constructor(private router: Router, private productSer: ProductsService,private activateRoute:ActivatedRoute) {
    console.log(this.products)
  }
  products:any|null=null
  productId=Number(this.activateRoute.snapshot.paramMap.get('id'))
  product = new FormGroup({
    // id: new FormControl('',[Validators.required, Validators.minLength(3)]),
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    description: new FormControl('',[Validators.required, Validators.minLength(10)]),
    price: new FormControl('',[Validators.required]),
    quntity: new FormControl('',[Validators.required]),
    img: new FormControl(''),
  })
  ngOnInit(): void {
    if(this.productId!=0){
      this.productSer.getProductById(this.productId).subscribe({
        next:(res)=>{
          this.products=res
          console.log("res="+res)
          this.product.controls["name"].setValue(this.products.name),
          this.product.controls["description"].setValue(this.products.description)
          this.product.controls["price"].setValue(this.products.price)
          this.product.controls["quntity"].setValue(this.products.quntity)
          this.product.controls["img"].setValue(this.products.img)
        }


      })}
  }
  add(e: any) {
    e.preventDefault()
    if (this.product.status == 'VALID') {
      if(this.productId==0){
        this.productSer.addProduct(this.product.value).subscribe()
        // console.log(products)
        // console.log("add")
        this.router.navigate(['/products'])
      }else{
        this.productSer.editProduct(this.productId,this.product.value).subscribe({})
        this.router.navigate(['/products'])
        // console.log("edit")
      }

    } else {
      alert("please full form")
    }
  }

  get ProductName() {
    return this.product.controls["name"];
  }
  get Productdes() {
    return this.product.controls["description"];
  }
  get ProductPrice() {
    return this.product.controls["price"];
  }
  get ProductQuantity() {
    return this.product.controls["quntity"];
  }

}
