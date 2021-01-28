import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListProducts, products } from './list';

@Component({
  selector: 'ap-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listProducts: ListProducts[] = products

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  handleNavigateDetails(id: number) {
    this.router.navigate(['novo-pedido/detalhes-do-prato', id])
  }
}
