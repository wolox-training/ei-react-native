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
  problem?: string | null;
}

export interface BookState {
  bookLoading: boolean;
  books: BookInterface[];
  booksError?: string | null;
}

export enum BookType {
  GET_BOOKS = 'BOOK_LIST',
  GET_BOOKS_SUCCESS = 'BOOK_LIST_SUCCESS',
  BOOK_LIST_ERROR = 'BOOK_LIST_ERROR'
}

export type BookActionsTypes =
  | { type: BookType.GET_BOOKS }
  | { type: BookType.GET_BOOKS_SUCCESS; payload: BookInterface[] }
  | { type: BookType.BOOK_LIST_ERROR; payload: string };
