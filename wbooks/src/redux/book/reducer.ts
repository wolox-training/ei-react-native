import { BookType, BookActionsTypes, BookState } from '@interfaces/book';

const initalState: BookState = {
  books: [],
  bookLoading: false,
  booksError: null
};

export const bookListReducer = (state: BookState = initalState, action: BookActionsTypes): BookState => {
  switch (action.type) {
    case BookType.GET_BOOKS:
      return { ...state, bookLoading: true };
    case BookType.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload, bookLoading: false };
    case BookType.BOOK_LIST_ERROR:
      return { ...state, bookLoading: false, booksError: action.payload };
    default:
      return state;
  }
};
