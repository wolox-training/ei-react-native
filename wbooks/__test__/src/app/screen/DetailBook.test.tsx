import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react-native';

import { BOOKS_MOCK } from '../../../../src/constants/mockBooks';
import { BookInterface } from '../../../../src/interfaces/book';
import DetailBook from '../../../../src/app/screens/DetailBook/index';

const MOCKED_TEST = BOOKS_MOCK[0];
const books: BookInterface = MOCKED_TEST;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(books);

describe('detailBookScreenTest', () => {
  test('getTitleBookNotNull', () => {
    const params: any = {
      params: {
        id: books.id,
        author: books.author,
        title: books.title,
        image: books.imageUrl
      }
    };
    const { getByText } = render(
      <Provider store={store}>
        <DetailBook route={params} key={books.id} />
      </Provider>
    );
    expect(getByText(books.title)).toBeDefined();
    expect(getByText(books.author)).toBeDefined();
    expect(getByText(books.title)).not.toBeNull();
    expect(getByText(books.author)).not.toBeNull();
  });
});
