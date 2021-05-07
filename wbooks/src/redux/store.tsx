import { createStore } from 'redux';

import Reactotron from '../../ReactotronConfig';

import { bookListReducer } from './book/reducer';

export const store = createStore(bookListReducer, Reactotron.createEnhancer());
