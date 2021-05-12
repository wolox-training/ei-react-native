import bookService from '@services/book';
import { createTypes, completeTypes } from 'redux-recompose';

export const TARGET_BOOK = 'books';

export const actions = createTypes(completeTypes({ primaryActions: ['GET_BOOKS'] }), '@@BOOKS');

const actionCreator = {
  getBooksList: () => ({
    type: actions.GET_BOOKS,
    target: TARGET_BOOK,
    service: bookService.getBooks
  })
};
export default actionCreator;
