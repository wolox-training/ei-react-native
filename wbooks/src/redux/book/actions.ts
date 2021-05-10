import { BookActionsTypes, BookInterface, BookType } from 'src/interfaces/book';

export const actionCreator = {
  getBooksList: () => (book: BookInterface[]): BookActionsTypes => ({
    type: BookType.BOOK_LIST,
    payload: book
  })
};
