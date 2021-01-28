import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

@Input() showADDProduct: boolean = false
  quantityItem: number = 1;
  price: number = 3.25;
  total: string = 3.25.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  constructor() { }

  ngOnInit(): void {
  }

  removeItem() {
    if(this.quantityItem !== 1){
      this.quantityItem -= 1
      let som = this.price * this.quantityItem
      this.total = som.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }
  }

  addItem() {
    this.quantityItem += 1

    let som = this.price * this.quantityItem
    this.total = som.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }
}
