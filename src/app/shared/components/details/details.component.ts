import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() productDetail: any = []

  data: any = []

  constructor() { }

  ngOnInit(): void {
    this.productDetail[0].opcoes.map( (details: any) => (
      this.data = [...this.data, { label: details.tipo, value: details.valor }]
    ))
  }

}
