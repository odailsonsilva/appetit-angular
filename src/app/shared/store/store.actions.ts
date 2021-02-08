import { createAction, props } from '@ngrx/store';
import { ClientStoreModel, ProductInterface, ProductModel } from './store.model';

export enum ActionTypes {
  ADD = 'ADD',
  ADD_CLIENT = 'ADD_CLIENT',
  REMOTE_CLIENT = 'REMOTE_CLIENT',
  CLEAR_STORE = 'CLEAR_STORE'
}

export const ADD = createAction(
  ActionTypes.ADD,
  props<{_id: ProductInterface, total: ProductInterface}>()
)

export const ADD_CLIENT = createAction(
  ActionTypes.ADD_CLIENT,
  props<{payload: any, id: number}>()
)

export const REMOTE_CLIENT = createAction(
  ActionTypes.REMOTE_CLIENT,
  props<{id: ClientStoreModel}>()
)

export const CLEAR_STORE = createAction(
  ActionTypes.CLEAR_STORE
)
