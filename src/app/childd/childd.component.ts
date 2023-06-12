import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childd',
  templateUrl: './childd.component.html',
  styleUrls: ['./childd.component.scss']
})
export class ChilddComponent {
  @Input () producttoggle:Boolean=false
  @Input () selectedProduct:any;
  @Output() productadded = new EventEmitter<string>()
  onAddProduct(){
    this.productadded.emit(this.selectedProduct)
  }
}
