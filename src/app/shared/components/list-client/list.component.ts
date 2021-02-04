import { Component,  OnInit} from '@angular/core';
import { ListClient, clients } from './list-client';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CartModel } from '../../store/store.model';
import { ADD_CLIENT, REMOTE_CLIENT } from '../../store/store.actions';

@Component({
  selector: 'ap-list-client',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListClientComponent implements OnInit {
  cart$: Observable<any>
  listClients: ListClient[] = clients
  clientsSelected: any[] = []


  constructor(
    private store: Store<CartModel | any>
  ) {
    this.cart$ = this.store.select('cart')
   }

   ngOnInit(): void {
    this.cart$.subscribe(res => {

      res.clients.map((client: any) => {
        const filter = this.clientsSelected.indexOf(client.id)
        if(filter === -1 || this.clientsSelected === []){
          this.clientsSelected = [
            ...this.clientsSelected,
            client.id
          ]
        }
      })
    })


  }

  handleSeletedClient(client: any) {

    const filter = this.clientsSelected.indexOf(client.id)

    if(filter === -1){
      this.store.dispatch(ADD_CLIENT(client))
    }else{
      this.store.dispatch(REMOTE_CLIENT(client))
      const filterSelected = this.clientsSelected.filter(id => client.id !== id)
      this.clientsSelected = filterSelected
    }
  }

  handleComparedIDs(id: number) {
    const filter = this.clientsSelected.indexOf(id)

    if(filter >= 0){
      return false
    }

    return true
  }
}
