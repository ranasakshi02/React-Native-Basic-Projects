import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import allDataReducer from './reducers'
import pdfDataReducer from './pdfReducer'

const rootReducer = combineReducers({allDataReducer,pdfDataReducer})

export const Store=createStore(rootReducer,applyMiddleware(thunk));
