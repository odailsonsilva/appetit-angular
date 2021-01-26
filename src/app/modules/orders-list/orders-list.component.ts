import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  data: any[] = [
    {label:'PEDIDOS', value: 'pedidos', icon: '../../../assets/icons/orders.svg',
        ss:[
          {label: 'em abertos', value: 'aberto'},
          {label: 'encerrados', value: 'concluidos'},
        ]
    },
    {label:'clientes', value: 'clientes', icon: '../../../assets/icons/user.svg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
