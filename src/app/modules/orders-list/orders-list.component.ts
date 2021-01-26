import { Component, OnInit } from '@angular/core';
import { orders } from './orders';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  days: [] = orders

  constructor() { }

  ngOnInit(): void {
  }

}
