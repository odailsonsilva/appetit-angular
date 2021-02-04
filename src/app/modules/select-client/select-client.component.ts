import { Component, DoCheck, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import { CartModel } from '../../shared/store/store.model';

@Component({
  selector: 'app-select-client',
  templateUrl: './select-client.component.html',
  styleUrls: ['./select-client.component.scss']
})
export class SelectClientComponent implements DoCheck {
  cart$: Observable<any>
  clientsSelected: any[] = []
  path: string = 'novo-pedido/finalizar'
  totalClientSelected: any

  passo = '2'
  progresso = 67

  constructor(private store: Store<CartModel[] | any>) {
    this.cart$ = this.store.select('cart')
  }

  ngDoCheck(): void {
    this.cart$.subscribe(res => {
      this.clientsSelected = res.clients
    })
    const quanti = this.clientsSelected.length

    if(quanti > 1){
      this.totalClientSelected = `${quanti} clientes selecionados`
    }else{
      this.totalClientSelected = `${quanti} cliente selecionado`
    }

  }

}
