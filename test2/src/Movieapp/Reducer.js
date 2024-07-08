// src/reducer.js
const initialState = {
  movies: [],
  searchItem: '',
  loading: false,
  error: null,
};

const SET_SEARCH_ITEM = 'SET_SEARCH_ITEM';
const SET_MOVIES = 'SET_MOVIES';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_ITEM:
      return { ...state, searchItem: action.payload };
    case SET_MOVIES:
      return { ...state, movies: action.payload, loading: false, error: null };
      case SET_LOADING:
        return { ...state, loading: action.payload };
      case SET_ERROR:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
  }
};
