import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CartModel, ProductModel } from '../../../../shared/store/store.model';
import { ADD } from '../../../../shared/store/store.actions'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  cart$: Observable<any>

  @Input() showADDProduct: boolean = false
  @Input() product: any = []
  @Input() observations = ''
  quantityItem: number = 1;
  price: number = 0;
  total: string | number = 0
  totalNFormatado: number = 0
  compareProducts: any[] = []

  constructor(
    private router: Router,
    private store: Store<CartModel | any>
  )
  {

    this.cart$ = this.store.select('cart')

  }

  ngOnInit(): void {
    //inicializando valores
    this.price = this.product[0].valorN
    this.totalNFormatado = this.product[0].valorN
    this.total = this.product[0].valorN.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }

  removeItem() {
    if(this.quantityItem !== 1){
      this.quantityItem -= 1
      let som = this.price * this.quantityItem
      this.totalNFormatado = som
      this.total = som.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }
  }

  addItem() {
    this.quantityItem += 1

    let som = this.price * this.quantityItem
    this.totalNFormatado = som
    this.total = som.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

  AddProductStore() {
    //fora o valor e as observacoes
    const dataStore: any = {
      _id: this.product[0].id,
      foto: this.product[0].foto,
      nome: this.product[0].nome,
      valorUnitario: parseFloat(this.product[0].valorN),
      total: this.totalNFormatado,
      description: this.observations,
      quantidade: this.quantityItem
    }

    this.store.dispatch(ADD(dataStore))

    this.router.navigate(['novo-pedido/selecionar-prato'])
  }
}
