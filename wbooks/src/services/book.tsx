import { BOOKS_MOCK } from '@constants/mockBooks';
import { BookPromise } from '@interfaces/book';

function promiseGetBook() {
  return new Promise<BookPromise>(resolve => {
    setTimeout(() => resolve({ ok: true, data: BOOKS_MOCK }), 1000);
  });
}

const bookService = {
  getBooks: () => promiseGetBook()
};
export default bookService;
