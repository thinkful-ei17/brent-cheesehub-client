export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheeseRequest = () => ({
  type: FETCH_CHEESES_REQUEST,
});
export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses,
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error,
});


export const fetchCheeses = cheeses => (dispatch) => {
  dispatch(fetchCheeseRequest());
  return fetch('http://localhost:8080/cheeses')
    .then(res => (!res.ok ? Promise.reject(res.statusText) : res.json()))
    .then(dispatch(fetchCheesesSuccess(cheeses)))
    .catch(err =>
      dispatch(fetchCheesesError(err)));
};
