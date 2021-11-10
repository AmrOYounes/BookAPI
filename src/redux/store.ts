import { createStore, applyMiddleware }  from 'redux';
import reducers from './rootReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';

 export const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk)));