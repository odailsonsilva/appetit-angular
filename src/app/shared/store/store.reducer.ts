import { createReducer, on } from '@ngrx/store'

import { ProductModel, CartModel } from './store.model'
import { ADD, ADD_CLIENT, REMOTE_CLIENT, CLEAR_STORE } from './store.actions'

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
  on(CLEAR_STORE, state => {
    state = {
      products: [],
      clients: [],
      totalFinal: 0
    }
    return state
  })
)

// funcao para calcular total
function calculateTotal(products: ProductModel[]): number {
  let total: number = 0;
  products.map(product => {
    total += product.total
  })

  return total;
}



