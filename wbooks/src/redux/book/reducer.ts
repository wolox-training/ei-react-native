import { BOOKS_MOCK } from '@constants/mockBooks';
import { BookType, BookActionsTypes, BookState } from '@interfaces/book';

const initalState: BookState = {
  books: [],
  bookLoading: false
};

export const bookListReducer = (state: BookState = initalState, action: BookActionsTypes): BookState => {
  switch (action.type) {
    case BookType.BOOK_LIST:
      return { bookLoading: true, books: [] };
    case BookType.BOOK_LIST_SUCCESS:
      return { bookLoading: false, books: BOOKS_MOCK };
    case BookType.BOOK_LIST_ERROR:
      return { ...state, bookLoading: false, booksError: action.booksError };
    default:
      return state;
  }
};
