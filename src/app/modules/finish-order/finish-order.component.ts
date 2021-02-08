import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { CLEAR_STORE } from '../../shared/store/store.actions';
import { CartModel } from '../../shared/store/store.model';
import { HeaderDatepickerComponent } from './header-datepicker/header-datepicker.component'

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.scss']
})
export class FinishOrderComponent implements OnInit {

  cart$: Observable<any>
  appetit_color: string = "#FF8822"
  passo = '3'
  progresso = 100
  data: any
  headerDate = HeaderDatepickerComponent
  showADDProduct: boolean = false

  constructor(
    private router: Router,
    private store: Store<CartModel[] | any>
  ) {
    this.cart$ = this.store.select('cart')
  }

  ngOnInit(): void {
    this.data = [
      { label: 'Não está pago', value: 1 },
      { label: 'Já está pago', value: 2 }
    ]
  }

  handleRedirectFeedback() {
    this.store.dispatch(CLEAR_STORE())
    this.router.navigate(['finalizado-pedido'])
  }

  ativedADDProduct(){
    this.showADDProduct = true
  }

}
