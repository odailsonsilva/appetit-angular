import { createAction, props } from '@ngrx/store';
import { ProductModel } from './store.model';

export enum ActionTypes {
  ADD = 'ADD',
  SHOW = 'SHOW'
}

export const ADD = createAction(
  ActionTypes.ADD,
  props<{payload: any}>()
)

export const SHOW = createAction(
  ActionTypes.SHOW
)
