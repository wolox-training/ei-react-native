import { BookPromise } from '@interfaces/book';
import { BOOKS_MOCK } from '@constants/mockBooks';

const CUSTOM_LIBRARY_ERROR = "Can't load books now, try later";
export const fakeApiTimeOut = () => {
  return new Promise<BookPromise>((resolve, reject) => {
    setTimeout(() => {
      const response = { ok: true, data: BOOKS_MOCK };
      resolve(response);
      const error = { ok: false, data: [], problem: CUSTOM_LIBRARY_ERROR };
      reject(error);
    }, 300);
  });
};
