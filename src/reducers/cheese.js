import React from 'react';

import {
  FETCH_CHEESES_ERROR,
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_CHEESES_ERROR:
    return {
      ...state,
      error: action.error,
      loading: false,
      cheeses: [],
    };
  case FETCH_CHEESES_REQUEST:
    return {
      ...state,
      error: null,
      loading: true,
    };
  case FETCH_CHEESES_SUCCESS:
    return {
      ...state,
      error: null,
      loading: false,
      cheeses: [action.cheeses],
    };
  default:
    return state;
  }
};

export default reducer;
