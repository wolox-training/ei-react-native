import { BOOKS_MOCK } from '@constants/mockBooks';
import { BookInterface, BookType, BookActionsTypes } from '@interfaces/book';

interface BookState {
  bookLoading: boolean;
  books: BookInterface[];
  booksError?: boolean;
}

const initalState: BookState = {
  books: BOOKS_MOCK,
  bookLoading: false,
  booksError: false
};

export const bookListReducer = (state: BookState = initalState, action: BookActionsTypes): BookState => {
  switch (action.type) {
    case BookType.BOOK_LIST:
      return { bookLoading: false, books: BOOKS_MOCK };
    default:
      return state;
  }
};
