import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { bookListReducer } from './book/reducer';

const enhancer = [applyMiddleware(thunk)];

export const store = createStore(bookListReducer, ...enhancer);
