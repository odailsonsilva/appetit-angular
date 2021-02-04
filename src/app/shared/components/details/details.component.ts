import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() productDetail: any = []
  showADDProduct: boolean = false
  data: any = []
  inputValue = ''

  constructor() { }

  ngOnInit(): void {
    this.productDetail[0].opcoes.map( (details: any) => (
      this.data = [...this.data, { label: details.tipo, value: details.valor }]
    ))
  }

  ativedADDProduct(){
    this.showADDProduct = true
  }

  handleInput(event: any) {
    this.inputValue = event.target.value
  }
}
