import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ProductCenterComponent} from './product-center/product-center.component'
import { NewProductComponent } from './new-product/new-product.component';
import { ProductviewComponent } from './productview/productview.component';
const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductCenterComponent},
  {path:'new',component:NewProductComponent},
  {path:'show',component:ProductviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }