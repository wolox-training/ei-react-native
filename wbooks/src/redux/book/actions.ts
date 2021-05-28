import { createTypes, completeTypes } from 'redux-recompose';
import bookService from '@services/book';

export const TARGETS = { BOOKS: 'books', SEARCH: 'search' };

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_BOOKS'], ignoredActions: ['SEARCH_BOOK'] }),
  '@@BOOKS'
);

const actionCreator = {
  getBooksList: () => ({
    type: actions.GET_BOOKS,
    target: TARGETS.BOOKS,
    service: bookService.getBooks
  }),
  searchBooks: (searchBook: string) => ({
    type: actions.SEARCH_BOOK,
    target: TARGETS.SEARCH,
    payload: searchBook
  })
};
export default actionCreator;
