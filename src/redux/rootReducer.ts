import {combineReducers} from 'redux';
import bookReducer from './Book/bookReducer';

const reducers = combineReducers({
    Book : bookReducer,
});

export type RootState = ReturnType<typeof reducers>
export default reducers;