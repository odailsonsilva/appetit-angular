import { Component, OnInit } from '@angular/core';
import { ListProducts, products } from '../../shared/components/list/list';
import { Observable } from 'rxjs'
import { Store, select, Action } from '@ngrx/store'

import { CartModel } from '../../shared/store/store.model';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss']
})
export class SelectProductComponent implements OnInit {

  cart$: Observable<any>
  products: ListProducts[] = products


  constructor(private store: Store<CartModel[] | any>) {
    this.cart$ = this.store.pipe(select('cartReducer'))
  }

  ngOnInit(): void {
  }

}
