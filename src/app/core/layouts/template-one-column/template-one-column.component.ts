import { Component, Input, OnInit } from '@angular/core';
import { HeaderDataFormat } from './template-one-column.model';

@Component({
  selector: 'ap-template-one-column',
  templateUrl: './template-one-column.component.html',
  styleUrls: ['./template-one-column.component.scss']
})
export class TemplateOneColumnComponent implements OnInit {

  data: any = [
    { label:'pedidos', value: 'pedidos', icon: '../../../assets/icons/orders.svg',
        ss:[
          {label: 'em abertos', value: 'aberto'},
          {label: 'encerrados', value: 'concluidos'},
        ]
    },
    { label:'clientes', value: 'clientes', icon: '../../../assets/icons/user.svg'}
  ]

  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
