import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-order',
  templateUrl: './feedback-order.component.html',
  styleUrls: ['./feedback-order.component.scss']
})
export class FeedbackOrderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  OrderList() {
    this.router.navigate(['lista-de-pedidos'])
  }


  NewOrder() {
    this.router.navigate(['novo-pedido/selecionar-prato'])
  }
}
