import { put, fork, takeLatest } from 'redux-saga/effects';
import { constants as shopConstants, actions as shopActions } from '../modules/shop';

import type { shopType } from '../../common/types/shop';

export function* fetchShopData() {
  // pretend there is an api call
  const result: shopType = {
    items: [],
    addedItems: [],
    total: 0,
    currency: 'USD',
  };

  yield put(shopActions.updateShop(result));
}

function* watchGetShop() {
  yield takeLatest(shopConstants.GET_SHOP, fetchShopData);
}

export const shopSaga = [
  fork(watchGetShop),
];
