import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { CartModel } from '../../shared/store/store.model';

@Component({
  selector: 'app-select-client',
  templateUrl: './select-client.component.html',
  styleUrls: ['./select-client.component.scss']
})
export class SelectClientComponent implements OnInit {
  cart$: Observable<any>
  clientSelected: string = ''
  path: string = 'novo-pedido/concluir-pedido'

  constructor(private store: Store<CartModel[] | any>) {
    this.cart$ = this.store.select('cart')
  }

  ngOnInit(): void {
  }

}
