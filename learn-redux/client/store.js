import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create object for default data

const defaultstate = {
  comments,
  posts
}

const store = createStore(rootReducer, defaultstate);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;