import { BOOKS_MOCK } from '@constants/mockBooks';
import { BookActionsTypes, BookInterface, BookState, BookType, BookPromise } from '@interfaces/book';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

const CUSTOM_LIBRARY_ERROR = "Can't load books now, try later";

const getBooks = (): BookActionsTypes => ({
  type: BookType.BOOK_LIST
});

const setBooks = (books: BookInterface[]): BookActionsTypes => ({
  type: BookType.BOOK_LIST_SUCCESS,
  payload: books
});

const setBookError = (booksError: string): BookActionsTypes => ({
  type: BookType.BOOK_LIST_ERROR,
  booksError
});

const fakeApiTimeOut = () => {
  return new Promise<BookPromise>((resolve, reject) => {
    setTimeout(() => {
      const response = { ok: true, data: BOOKS_MOCK };
      resolve(response);
      const error = { ok: false, data: [] };
      reject(error);
    }, 300);
  });
};

export const actionCreator = {
  getBooksList: (): ThunkAction<void, BookState, unknown, Action<BookInterface>> => async (
    dispatch: Dispatch
  ) => {
    dispatch(getBooks());
    const { data, ok } = await fakeApiTimeOut();
    if (ok) dispatch(setBooks(data));
    else dispatch(setBookError(CUSTOM_LIBRARY_ERROR));
  }
};
