import { BOOKS_MOCK } from '@constants/mockBooks';

export const getBooks = () =>
  new Promise<any>(resolve =>
    setTimeout(() => {
      resolve({ ok: true, data: BOOKS_MOCK });
    }, 1000)
  );
