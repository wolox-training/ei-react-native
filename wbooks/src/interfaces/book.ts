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
  BOOK_LIST = 'BOOK_LIST'
}

export type BookActionsTypes = { type: BookType.BOOK_LIST; payload: BookInterface[] };
