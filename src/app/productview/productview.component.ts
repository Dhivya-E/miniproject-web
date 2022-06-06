import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent implements OnInit {

  pid:any
  products:any
  myser:any
  id:any;
  
    constructor(private myapp:AppComponent,private myservice:MyserviceService) {
      this.id=myservice.id
      this.myser=myservice
      console.log(this.id)
      this.showData()
     
     }
  
     async showData(){
      this.pid=this.id
    this.products=  await this.myser.getSpecificData(this.pid)
    console.log('pppp')
    console.log(this.products)
  
     }
    ngOnInit(): void {
    }
}