import { BOOKS_MOCK } from '../../../src/constants/mockBooks';
import { BookInterface } from '../../../src/interfaces/book';
import BookListReducer, { initialState } from '../../../src/redux/book/reducer';
import { actions, TARGETS } from '../../../src/redux/book/actions';

const MOCKED_TEST = BOOKS_MOCK[0];
const books: BookInterface[] = [MOCKED_TEST];

export const booksActions = {
  getListBook: {
    type: actions.GET_BOOKS,
    target: TARGETS.BOOKS
  },
  getListBookSuccess: {
    type: actions.GET_BOOKS_SUCCESS,
    target: TARGETS.BOOKS,
    payload: books
  },
  getListBookFailure: {
    type: actions.GET_BOOKS_FAILURE,
    target: TARGETS.BOOKS,
    payload: true
  }
};
describe('BOOKSLIST', () => {
  test('GET_BOOKLIST', () => {
    expect(BookListReducer(undefined, booksActions.getListBook)).toMatchObject({
      ...initialState,
      booksLoading: true
    });
  });
  test('GET_BOOKLIST_SUCCESS', () => {
    expect(BookListReducer(undefined, booksActions.getListBookSuccess)).toMatchObject({
      ...initialState,
      books
    });
  });
  test('GET_BOOKLIST_FAILURE', () => {
    expect(BookListReducer(undefined, booksActions.getListBookFailure)).toMatchObject({
      ...initialState,
      booksError: true
    });
  });
});
