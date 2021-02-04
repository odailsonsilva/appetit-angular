import { createReducer, on } from '@ngrx/store'

import { ProductModel, CartModel } from './store.model'
import { ADD, ADD_CLIENT, REMOTE_CLIENT } from './store.actions'

export const cart = new CartModel()

export const cartReducer = createReducer(
  cart,
  on(ADD, (state, action) => {
      // const filter = state.products.filter(product => product._id === action._id)
      // console.log(filter)
      // if(filter.length > 0){
      //   const test = state.products.map(product => {
      //     if(product._id === action._id){
      //       return {...product, total: product.total + action.total, quantidade: product.quantidade + action.quantidade}
      //     }else{
      //       return product
      //     }
      //   })
      // }else{

      // }
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
  on(ADD_CLIENT, (state, action) => {
    state = {
      ...state,
      clients: [
        ...state.clients,
        action
      ]
    }
    return state
  },
  ),
  on(REMOTE_CLIENT, (state, action) => {
    const filter = state.clients.filter(client => client.id !== action.id)
    state = {
      ...state,
      clients: [
        ...filter
      ]
    }
    return state
    },
  ),
)

// funcao para calcular total
function calculateTotal(products: ProductModel[]): number {
  let total: number = 0;
  products.map(product => {
    total += product.total
  })

  return total;
}



