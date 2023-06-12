import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selProduct:String='';
  producttoggle:boolean=false
  addedProductInCart:any
  constructor() { }

  ngOnInit() {
  }
  onSelectProduct(product:any){
  this.producttoggle=true;
  this.selProduct=product
  }
  cart(event:any){
    this.addedProductInCart=event
  }
}

