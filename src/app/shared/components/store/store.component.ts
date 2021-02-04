import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Location } from '@angular/common';

import { CartModel } from '../../store/store.model';


@Component({
  selector: 'ap-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  cart$: Observable<any>
  activedStore: boolean = false
  productsSelected: any[] = []
  clientsSelected: any[] = []
  total: any

  product: boolean = false
  totalFormat: any

  constructor(
    private location: Location,
    private store: Store<CartModel[] | any>
  ) {
    this.cart$ = this.store.select('cart')
  }

  ngOnInit(): void {
    if(location.pathname === '/novo-pedido/selecionar-cliente'|| location.pathname === '/novo-pedido/finalizar'){
      this.activedStore = true
    }else{
      this.activedStore = false
    }

    this.cart$.subscribe(res => {
      this.productsSelected = res.products

      this.clientsSelected = res.clients

      this.total = res.totalFinal
    })

    this.totalFormat = this.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }

}
