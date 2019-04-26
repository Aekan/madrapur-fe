import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import type { shopType } from '../../common/types/shop';

const GET_SHOP = 'app/shop/GET_SHOP';
const UPDATE_SHOP = 'app/shop/UPDATE_SHOP';

export const constants = {
  GET_SHOP,
  UPDATE_SHOP,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getShop = createAction(GET_SHOP, () => ({}));
export const updateShop = createAction(UPDATE_SHOP, (result) => ({ result }));

export const actions = {
  getShop,
  updateShop,
};

export const reducers = {
  [UPDATE_SHOP]: (state, { payload }) => state.merge({
    ...payload,
  }),
};

export const initialState = () => Map({
  result: {
    capacity: '',
    category: '',
    currency: 'HUF',
    description: '',
    duration: '',
    end_date: '2019-03-13',
    id: 2,
    images: '',
    short_description: '',
    start_date: '2019-03-20',
    status: 'active',
    thumbnail: '',
    title: 'Budapest Dinner Cruise ',
  },
  items: [],
  addedItems: [],
  total: 0,
  currency: 'USD',
});

export default handleActions(reducers, initialState());
