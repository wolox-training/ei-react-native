import { fetchMiddleware } from 'redux-recompose';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { initialState } from '../../../src/redux/book/reducer';
import actionCreator, { actions, TARGETS } from '../../../src/redux/book/actions';

const middlewares = [thunk, fetchMiddleware];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('getBookListAction', () => {
  beforeEach(() => store.clearActions());

  test('actionCreator: getBooksList', () => {
    store.dispatch(actionCreator.getBooksList());
    expect(store.getActions()).toEqual([{ target: TARGETS.BOOKS, type: actions.GET_BOOKS }]);
  });
});
