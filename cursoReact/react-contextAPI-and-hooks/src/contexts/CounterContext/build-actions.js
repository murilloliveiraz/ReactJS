import * as actionTypes from './action-types';

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: (payload) => dispatch({ type: actionTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreasefn(dispatch),
    asyncError: () => asyncErrorfn(dispatch),
  };
};

const asyncIncreasefn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });
  
  return await new Promise (r => {
    dispatch({ type: actionTypes.ASYNC_INCREASE_END });
    setTimeout(() => {
      r('RESOLVED!');
    }, 2000)
  });
};

const asyncErrorfn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START });
  
  return await new Promise ((resolve, reject) => {
    dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR });
    setTimeout(() => {
      reject('REJECTED!');
    }, 2000)
  });
};