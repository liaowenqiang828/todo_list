import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducer/reducer';
import thunkMiddleware from 'redux-thunk';

const composeEhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEhancers(applyMiddleware(thunkMiddleware));
const store = createStore(
  reducer,
  enhancer
);

export default store;