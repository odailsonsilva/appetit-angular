import { Component, OnInit } from '@angular/core';
import { ListProducts, products } from '../../shared/components/list/list';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { CartModel } from '../../shared/store/store.model';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss']
})
export class SelectProductComponent implements OnInit {

  cart$: Observable<any>
  products: ListProducts[] = products

  passo = '1'
  progresso = 33

  totalStore: number = 0
  totalFormat: string = ''
  path: string = 'novo-pedido/selecionar-cliente'


  constructor(private store: Store<CartModel[] | any>) {
    this.cart$ = this.store.select('cart')
  }

  ngOnInit(): void {
    //captura dados do observable (Store)
    this.cart$.subscribe(res => {
      this.totalStore = res.totalFinal
    })

    this.totalFormat = this.totalStore.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    this.totalFormat = `Total: ${this.totalFormat}`
  }

}
