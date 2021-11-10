import {
  FETCH_BOOKS_REQUSET,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  UPDATE_SEARCH_QUERY,
  CLEAR_BOOKS,
  stateTypes,
  Action,
} from "./bookAcrionTypes";

const initialState : stateTypes = {
  count: 0,
  startIndex: 0,
  hasMore: true,
  serchQuery: "",
  isLoading: false,
  bookData: [],
  error: "",
  selectedBook: {},
};

const bookReducer = (state :stateTypes = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUSET:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        count: action.payload.totalItems,
        bookData: [...state.bookData, ...action.payload.items],
        startIndex: state.startIndex + 10,
        hasMore:
          state.bookData.length < action.payload.totalItems ? true : false,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        serchQuery: "",
        isLoading: false,
        bookData: [],
        error: action.payload,
      };
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        bookData: [],
        serchQuery: action.payload,
        startIndex: 0,
      };

    case CLEAR_BOOKS:
      return {
        ...state,
        bookData: [],
        startIndex: 0,
      };
    default:
      return state;
  }
};

export default bookReducer;
