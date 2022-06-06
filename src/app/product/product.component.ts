import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any ;
  app:any;
constructor(private myservice:MyserviceService,private myapp:AppComponent) {
  this.myservice.get(this.products)
  this.getproducts();
  this.app=myservice;
  console.log(this.products)

}

async getproducts(){
  this.products=await this.myservice.ProductRegister()
  console.log(this.products)
}

  ngOnInit(): void {
  }


}
