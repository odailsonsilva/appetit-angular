import { createReducer, on } from '@ngrx/store'

import { ProductModel, CartModel } from './store.model'
import { ADD, SHOW } from './store.actions'

export const cart = new CartModel()

export const cartReducer = createReducer(
  cart,
  on(ADD, (state, action) => {
      state = {
        ...state,
        products: [
          ...state.products,
          action
        ]
      }
      state.totalFinal = calculateTotal(state.products)
      return state
    }
  ),
  on(SHOW, state => (state))
)


// funcao para calcular total
function calculateTotal(products: ProductModel[]): number {
  let total: number = 0;
  products.map(product => {
    total += product.total
  })

  return total;
}












// import { Action } from '@ngrx/store';

// const INITIAL_STATE = {
//   counter: 0
// }

// const reducer = (state = INITIAL_STATE, action: Action) => {
//   switch(action.type){
//     case 'AddProduct':
//       return {
//         ...state,
//         counter: state.counter + 1
//       }
//     case 'ShowProductStore':
//       return {
//         ...state,
//         counter: state.counter + 1
//       };
//     default:
//       return state
//   }
// }
