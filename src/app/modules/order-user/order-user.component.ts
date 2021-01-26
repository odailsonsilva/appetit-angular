import { Component, OnInit } from '@angular/core';
import { OrdersUserFormat, orders } from './orders-user';

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.scss']
})
export class OrderUserComponent implements OnInit {

  days:  OrdersUserFormat[] = orders
  titulo: string = 'Pedidos de Luiz'

  constructor() { }

  ngOnInit(): void {
  }

}
