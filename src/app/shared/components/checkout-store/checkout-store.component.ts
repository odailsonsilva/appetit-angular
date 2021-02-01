import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-store',
  templateUrl: './checkout-store.component.html',
  styleUrls: ['./checkout-store.component.scss']
})
export class CheckoutStoreComponent implements OnInit {

  @Input() contentLeft: string = ''
  @Input() path: string = ''

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.router.navigate([this.path])
  }

}
