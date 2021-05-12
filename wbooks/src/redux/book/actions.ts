import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { BookInterface, BookState } from '@interfaces/book';
import { fakeApiTimeOut } from '@services/book';

export const actions = {
  GET_BOOKS: '@@BOOKS/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@@BOOKS/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@@BOOKS/GET_BOOKS_FAILURE'
} as const;

const actionCreator = {
  getBooksList: (): ThunkAction<void, BookState, unknown, Action<BookInterface>> => async (
    dispatch: Dispatch
  ) => {
    dispatch({ type: actions.GET_BOOKS });
    const response = await fakeApiTimeOut();
    if (response.ok) dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: response.data });
    else dispatch({ type: actions.GET_BOOKS_FAILURE, payload: response.problem });
  }
};
export default actionCreator;
