import axios from 'axios';
import { put, fork, takeLatest } from 'redux-saga/effects';
import { constants as shopConstants, actions as shopActions } from '../modules/shop';

import type { shopType } from '../../common/types/shop';

export function* fetchShopData() {
  // pretend there is an api call

  axios
    .get('http://api.madrapur.lh/v1/rester/product', {
      params: {
        ID: 2,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      // always executed
    });

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
