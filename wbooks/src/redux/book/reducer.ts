import { BookInterface, BookType, BookActionsTypes } from '@interfaces';

interface BookState {
  loading: boolean;
  books: BookInterface[];
  error?: boolean;
}

const initalState: BookState = {
  books: [],
  loading: false,
  error: false
};

export const bookListReducer = (state: BookState = initalState, action: BookActionsTypes): BookState => {
  switch (action.type) {
    case BookType.BOOK_LIST_REQUEST:
      return { loading: true, books: [] };
    case BookType.BOOK_LIST_SUCCESS:
      return { loading: false, books: action.payload };
    case BookType.BOOK_LIST_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
