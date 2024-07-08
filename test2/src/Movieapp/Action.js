// src/action.js
const SET_SEARCH_ITEM = 'SET_SEARCH_ITEM';
const SET_MOVIES = 'SET_MOVIES';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';

export const setSearchItem = (item) => ({ type: SET_SEARCH_ITEM, payload: item });
export const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });
export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
