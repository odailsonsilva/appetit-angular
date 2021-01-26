import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderUserComponent } from './modules/order-user/order-user.component';
import { OrdersListComponent } from './modules/orders-list/orders-list.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'lista-de-pedidos', component: OrdersListComponent },
  { path: 'pedidos/:id', component: OrderUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
