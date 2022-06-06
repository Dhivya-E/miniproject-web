import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private myapp:AppComponent,private myservice:MyserviceService) { }
  postInfo(){
    this.myservice.dbnewproduct()
  }

  ngOnInit(): void {
  }

}