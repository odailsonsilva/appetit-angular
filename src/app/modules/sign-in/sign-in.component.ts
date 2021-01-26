import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email: string = ''
  senha: string = ''
  disabled: boolean = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleRedirectOrders(): void {
    this.router.navigate(['lista-de-pedidos'])
  }
}
