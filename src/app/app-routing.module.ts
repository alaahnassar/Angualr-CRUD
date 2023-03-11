import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDeatilsComponent } from './components/product-deatils/product-deatils.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
{
  path:'products',
  // canActivate:[AuthGuard],
  children:[
    {path:'',component:ProductsComponent},
    {path:':id',component:ProductDeatilsComponent},
    {path:':id/edit',component:AddProductComponent}

  ]
},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
