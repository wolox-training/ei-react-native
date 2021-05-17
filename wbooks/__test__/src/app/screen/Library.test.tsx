import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react-native';

import { BOOKS_MOCK } from '../../../../src/constants/mockBooks';
import { BookInterface } from '../../../../src/interfaces/book';
import Library from '../../../../src/app/screens/Library/index';
import MockedNavigator from '../components/MockedNavigator';

const MOCKED_TEST = BOOKS_MOCK[0];
const books: BookInterface = MOCKED_TEST;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(books);

describe('LibrarySnapshot', () => {
  test('to match with snapshot ', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <MockedNavigator component={Library} />
      </Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
