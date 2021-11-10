import {
  CLEAR_BOOKS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUSET,
  FETCH_BOOKS_SUCCESS,
  UPDATE_SEARCH_QUERY,
} from "./bookAcrionTypes";

import {KEY} from '../../config';
import { getBooks } from "../../Actions/APIs/BookAPIs";

const fetchBooksRequst = () => {
  return {
    type: FETCH_BOOKS_REQUSET,
  };
};

const fetchBooksSuccess = (book: any) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: book,
  };
};

const fetchBooksFailure = (err: any) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: err,
  };
};

const updateSearchQuery = (newQuery: string) => {
  return {
    type: UPDATE_SEARCH_QUERY,
    payload: newQuery,
  };
};

const fetchBooks = () => {
  return async (dispatch: any, getState: Function) => {
    dispatch(fetchBooksRequst());
    const { serchQuery, startIndex } = getState().Book;
    const params = {
      q: serchQuery,
      startIndex,
      Key: KEY,
    };
    try {
      const res = await getBooks(
        "/volumes",
        params
      );
      dispatch(fetchBooksSuccess(res));
    } catch (err: any) {
      dispatch(fetchBooksFailure(err.message));
    }
  };
};

const clearBooks = () => {
  return {
    type: CLEAR_BOOKS,
    payload: [],
  };
};

export { fetchBooks,  updateSearchQuery, clearBooks };
