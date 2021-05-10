import { BOOKS_MOCK } from '@constants/mockBooks';
import { Dispatch } from 'redux';
import { BookInterface, BookType } from '@interfaces';

const getAllBooks = async () => {
  const fakeBooksFetch: BookInterface[] = [];
  try {
    await BOOKS_MOCK.forEach(book => {
      fakeBooksFetch.push(book);
    });
    return { status: 'ok', data: fakeBooksFetch };
  } catch (error) {
    return { message: 'Not today' };
  }
};

export const actionCreator = {
  getListBook: () => async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: BookType.BOOK_LIST_REQUEST
      });
      const { data } = await getAllBooks();

      dispatch({
        type: BookType.BOOK_LIST_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: BookType.BOOK_LIST_FAIL,
        payload:
          error.response && error.response.message
            ? error.response.message
            : "We can't load library now, try again in some minutes. Thank you"
      });
    }
  }
};
