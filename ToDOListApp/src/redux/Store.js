import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './Reducer';

const rootReducer = combineReducers({ taskReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));