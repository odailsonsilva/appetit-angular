import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderDatepickerComponent } from './header-datepicker/header-datepicker.component'

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.scss']
})
export class FinishOrderComponent implements OnInit {

  appetit_color: string = "#FF8822"
  passo = '3'
  progresso = 100
  data: any
  headerDate = HeaderDatepickerComponent

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.data = [
      { label: 'Não está pago', value: 1 },
      { label: 'Já está pago', value: 2 }
    ]
  }

  handleRedirectFeedback() {
    this.router.navigate(['finalizado-pedido'])
  }

}
