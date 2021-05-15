import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react-native';

import CardBook from '../../../../src/app/components/CardBook/index';
import { BOOKS_MOCK } from '../../../../src/constants/mockBooks';
import { BookInterface } from '../../../../src/interfaces/book';

import MockedNavigator from './MockedNavigator';

const MOCKED_TEST = BOOKS_MOCK[0];
const books: BookInterface = MOCKED_TEST;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(books);

const RenderCustoms = {
  renderCardBook: () => (
    <CardBook author={books.author} title={books.title} image={books.imageUrl} id={books.id} key={books.id} />
  ),
  renderCompleteCardBook: () => (
    <Provider store={store}>
      <MockedNavigator component={RenderCustoms.renderCardBook} />
    </Provider>
  )
};

describe('cardBookTest', () => {
  test('get CardBook Snapshost ', () => {
    const { toJSON } = render(RenderCustoms.renderCompleteCardBook());
    expect(toJSON()).toMatchSnapshot();
  });
  test('pass all props they not was a null', () => {
    const { getByText } = render(RenderCustoms.renderCompleteCardBook());
    expect(getByText(books.title)).toBeDefined();
    expect(getByText(books.author)).toBeDefined();
    expect(getByText(books.title)).not.toBeNull();
    expect(getByText(books.author)).not.toBeNull();
  });
  test('Pass null props', () => {
    const { queryByText } = render(RenderCustoms.renderCompleteCardBook());
    expect(queryByText(books.genre)).toBeNull();
    expect(queryByText(books.year)).toBeNull();
  });
});
