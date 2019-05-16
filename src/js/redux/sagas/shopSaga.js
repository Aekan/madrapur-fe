import axios from 'axios';
import { put, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import { constants as shopConstants, actions as shopActions } from '../modules/shop';
import { getProductById, getProducts } from '../../common/api/index';

import type { shopType } from '../../common/types/shop';

export function* fetchShopData() {
  // const result = getProducts();
  const result = yield fetch('https://api.budapestrivercruise.co.uk/v1/rester/product').then((response) => response.json());

  yield put(shopActions.updateShop(result));
}

function* watchGetShop() {
  yield takeLatest(shopConstants.GET_SHOP, fetchShopData);
}

export const shopSaga = [
  fork(watchGetShop),
];
