import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsProductComponent } from './modules/details-product/details-product.component';
import { FeedbackOrderComponent } from './modules/feedback-order/feedback-order.component';
import { OrderUserComponent } from './modules/order-user/order-user.component';
import { OrdersListComponent } from './modules/orders-list/orders-list.component';
import { SelectProductComponent } from './modules/select-product/select-product.component';

import { SignInComponent } from './modules/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'lista-de-pedidos', component: OrdersListComponent },
  { path: 'pedidos/:id', component: OrderUserComponent },
  { path: 'novo-pedido/selecionar-prato', component: SelectProductComponent },
  { path: 'novo-pedido/detalhes-do-prato/:prato', component: DetailsProductComponent },
  { path: 'finalizado-pedido', component: FeedbackOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
