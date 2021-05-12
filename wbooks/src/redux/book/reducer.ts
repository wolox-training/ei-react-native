import { completeState, completeReducer, createReducer } from 'redux-recompose';
import { BookState } from '@interfaces/book';

import { actions } from './actions';

const initalState: BookState = completeState({
  description: {
    books: [],
    bookLoading: false,
    booksError: null
  }
});

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};
const completedReducer = completeReducer(reducerDescription);
export default createReducer(initalState, completedReducer);
