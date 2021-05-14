import { completeState, completeReducer, createReducer } from 'redux-recompose';
import { BookState } from '@interfaces/book';

import { actions } from './actions';

export const initialState: BookState = completeState({
  description: {
    books: []
  }
});

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};
const completedReducer = completeReducer(reducerDescription);
export default createReducer(initialState, completedReducer);
