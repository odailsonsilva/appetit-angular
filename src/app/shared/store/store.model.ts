import { Action } from '@ngrx/store'

export class ProductModel {
  public _id: string = ''
  public nome: string = ''
  public foto: string = ''
  public valorUnitario: number = 0
  public total: number = 0
}

export class CartModel {
  public products: any[] = []
  public totalFinal: number = 0
}
