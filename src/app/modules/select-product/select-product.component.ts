import { Component, OnInit } from '@angular/core';
import { ListProducts, products } from '../../shared/components/list/list';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss']
})
export class SelectProductComponent implements OnInit {

  products: ListProducts[] = products


  constructor() { }

  ngOnInit(): void {

  }

}
