export interface BookInterface {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
}
export interface BookPromise {
  data: BookInterface[];
  ok: boolean;
}

export interface BookState {
  bookLoading: boolean;
  books: BookInterface[];
  booksError?: string;
}

export enum BookType {
  BOOK_LIST = 'BOOK_LIST',
  BOOK_LIST_SUCCESS = 'BOOK_LIST_SUCCESS',
  BOOK_LIST_ERROR = 'BOOK_LIST_ERROR'
}

export type BookActionsTypes =
  | { type: BookType.BOOK_LIST }
  | { type: BookType.BOOK_LIST_SUCCESS; payload: BookInterface[] }
  | { type: BookType.BOOK_LIST_ERROR; booksError: string };
