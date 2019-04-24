import { put, fork, takeLatest } from 'redux-saga/effects';
import { constants as cartConstant, actions as cartActions } from '../modules/cart';

export function* fetchCartData() {
  // pretend there is an api call
  const result = {
    items: [],
  };

  yield put(cartActions.addToCart(result));
}

function* watchGetExample() {
  yield takeLatest(cartConstant.ADD_TO_CART, fetchCartData);
}

export const exampleSaga = [
  fork(watchGetExample),
];
