import { applyMiddleware, createStore, compose } from 'redux';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';

import BookListReducer from './book/reducer';

const enhancer = [applyMiddleware(thunk, fetchMiddleware)];
export const store = createStore(BookListReducer, compose(...enhancer));
