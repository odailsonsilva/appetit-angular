import { createAction, props } from '@ngrx/store';
import { ClientStoreModel, ProductInterface } from './store.model';

export enum ActionTypes {
  ADD = 'ADD',
  ADD_CLIENT = 'ADD_CLIENT',
  REMOTE_CLIENT = 'REMOTE_CLIENT'
}

export const ADD = createAction(
  ActionTypes.ADD,
  props<{id: ProductInterface}>()
)

export const ADD_CLIENT = createAction(
  ActionTypes.ADD_CLIENT,
  props<{payload: any, id: number}>()
)

export const REMOTE_CLIENT = createAction(
  ActionTypes.REMOTE_CLIENT,
  props<{id: ClientStoreModel}>()
)
