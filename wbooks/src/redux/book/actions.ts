import bookService from '@services/book';
import { createTypes, completeTypes } from 'redux-recompose';

export const TARGETS = { BOOKS: 'books' };

export const actions = createTypes(completeTypes({ primaryActions: ['GET_BOOKS'] }), '@@BOOKS');

const actionCreator = {
  getBooksList: () => ({
    type: actions.GET_BOOKS,
    target: TARGETS.BOOKS,
    service: bookService.getBooks
  })
};
export default actionCreator;
