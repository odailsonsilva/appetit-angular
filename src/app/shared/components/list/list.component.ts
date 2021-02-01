import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListProducts, products } from './list';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CartModel } from '../../store/store.model';

@Component({
  selector: 'ap-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cart$: Observable<any>
  listProducts: ListProducts[] = products
  productsSelect: any[] = []


  constructor(
    private router: Router,
    private store: Store<CartModel | any>
  ) {
    this.cart$ = this.store.select('cart')
   }

  ngOnInit(): void {
    this.cart$.subscribe(res => {
      res.products.map((product: any) => (
        this.productsSelect = [
          ...this.productsSelect,
          product._id
        ]
      ))
    })
  }


  handleNavigateDetails(id: number) {
    this.router.navigate(['novo-pedido/detalhes-do-prato', id])
  }

  handleComparedIDs(id: number) {
    const filter = this.productsSelect.indexOf(id)

    if(filter >= 0){
      return false
    }

    return true
  }
}
