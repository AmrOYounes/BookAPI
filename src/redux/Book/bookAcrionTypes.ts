import type {AllbookInfo} from '../../Components/bookDetails/bookInfotypes';
const FETCH_BOOKS_REQUSET = 'FETCH_BOOKS_REQUSET';
const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';

const CLEAR_BOOKS = 'CLEAR_BOOKS';

 export interface Action {
     type: string,
     payload: PayloadTypes
 }

 interface PayloadTypes {
    items: AllbookInfo [],
    totalItems: number,
    error: string,

 }

 export interface stateTypes {
  count: number,
  startIndex: number,
  hasMore: boolean,
  serchQuery: string,
  isLoading: boolean,
  bookData: [],
  error: string,
  selectedBook: {},
}

export {
    FETCH_BOOKS_REQUSET,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    UPDATE_SEARCH_QUERY,
    CLEAR_BOOKS,
}