import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orders, OrdersFormat } from './orders';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  days:  OrdersFormat[] = orders

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleNavigateOrderUser(){
    this.router.navigate(['pedidos', '1'])
  }
}
