import { completeState, completeReducer, createReducer } from 'redux-recompose';
import { BookState } from '@interfaces/book';

import { actions } from './actions';

export const initialState: BookState = completeState({
  description: {
    books: []
  },
  ignoredTargets: {
    searchBook: ''
  }
});

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {
    [actions.SEARCH_BOOK]: (state: BookState, action: typeof actions) => ({
      ...state,
      searchBook: action.payload
    })
  }
};
const completedReducer = completeReducer(reducerDescription);
export default createReducer(initialState, completedReducer);
