import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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