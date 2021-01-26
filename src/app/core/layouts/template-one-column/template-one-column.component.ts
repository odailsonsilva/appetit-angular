import { Component, OnInit } from '@angular/core';
import { HeaderDataFormat, SideBarFormat } from './template-one-column.model';

@Component({
  selector: 'ap-template-one-column',
  templateUrl: './template-one-column.component.html',
  styleUrls: ['./template-one-column.component.scss']
})
export class TemplateOneColumnComponent implements OnInit {

  data: SideBarFormat[] = [
    { label:'pedidos', value: 'pedidos', icon: '../../../assets/icons/orders.svg',
        ss:[
          {label: 'em abertos', value: 'aberto'},
          {label: 'encerrados', value: 'concluidos'},
        ]
    },
    { label:'clientes', value: 'clientes', icon: '../../../assets/icons/user.svg'}
  ]

  headerDados: HeaderDataFormat = {
    label: 'Olá, Vanusa!',
    editableTitle: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
