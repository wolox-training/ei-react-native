export interface BookInterface {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
}
export enum BookType {
  BOOK_LIST_REQUEST = 'BOOK_LIST_REQUEST',
  BOOK_LIST_SUCCESS = 'BOOK_LIST_SUCCESS',
  BOOK_LIST_FAIL = 'BOOK_LIST_FAIL'
}

export type BookActionsTypes =
  | { type: BookType.BOOK_LIST_REQUEST }
  | { type: BookType.BOOK_LIST_SUCCESS; payload: BookInterface[] }
  | { type: BookType.BOOK_LIST_FAIL; payload: string; error: boolean };
