// src/store.js
import { createStore } from 'redux';
import { moviesReducer } from './Reducer';

const Store = createStore(moviesReducer);

export default Store;
