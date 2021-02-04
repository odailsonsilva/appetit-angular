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
  public clients: any[] =[]
  public totalFinal: number = 0
}


export interface ClientStoreModel {
  id: number;
}


export interface ProductInterface {
  _id: string,
  nome: string,
  foto: string,
  valorUnitario: number,
  total: number
}
