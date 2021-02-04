import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.scss']
})
export class FinishOrderComponent implements OnInit {

  passo = '3'
  progresso = 100
  data: any

  constructor() { }

  ngOnInit(): void {
    this.data = [
      { label: 'Não está pago', value: 1 },
      { label: 'Já está pago', value: 2 }
    ]
  }

}
