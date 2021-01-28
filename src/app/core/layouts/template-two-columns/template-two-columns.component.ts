import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'ap-template-two-columns',
  templateUrl: './template-two-columns.component.html',
  styleUrls: ['./template-two-columns.component.scss']
})
export class TemplateTwoColumnsComponent implements OnInit {
  @Input() headerLeft: string = ''
  @Input() headerRight: string = ''
  foto: string = '../../../../assets/imgs/profile.png'
  data: any = [
    { label:'pedidos', value: 'pedidos', icon: '../../../assets/icons/orders.svg',
        ss:[
          {label: 'em abertos', value: 'aberto'},
          {label: 'encerrados', value: 'concluidos'},
        ]
    },
    { label:'clientes', value: 'clientes', icon: '../../../assets/icons/user.svg'}
  ]



  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  handleBackPage() {
    this.location.back()
  }

}
