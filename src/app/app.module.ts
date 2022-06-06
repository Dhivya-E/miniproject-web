import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyserviceService } from './myservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductCenterComponent } from './product-center/product-center.component';

import {HttpClientModule} from '@angular/common/http';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductviewComponent } from './productview/productview.component';
import { ProductComponent } from './product/product.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCenterComponent,
    NewProductComponent,
    ProductviewComponent,
    ProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }