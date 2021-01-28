import { Component, OnInit } from '@angular/core';
import { ListProducts, products } from './list';

@Component({
  selector: 'ap-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listProducts: ListProducts[] = products

  constructor() { }

  ngOnInit(): void {
  }

}
