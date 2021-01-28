import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListProducts, TodosProdutos, products } from '../../shared/components/list/list';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  products: ListProducts[] = products
  filterProductDetail: any

  constructor(private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const prato = this.activetedRoute.snapshot.params.prato

    let array: TodosProdutos[] = []
    products.map( type => {
      type.produtos.map((product: TodosProdutos) => {
        array = [ ...array, product ]
      })
    })

    const filter = array.filter((product) => (
      product.id === parseInt(prato)
    ))

    this.filterProductDetail = filter
  }

}
