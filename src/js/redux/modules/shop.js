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
export const getShop = createAction(GET_SHOP, (result) => ({ result }));
export const updateShop = createAction(UPDATE_SHOP, (result) => ({ result }));
export const Shop = createAction(UPDATE_SHOP, (result) => ({ result }));

export const actions = {
  getShop,
  updateShop,
};

export const reducers = {
  [GET_SHOP]: (state, { payload }) => {
    // console.warn("GETSOP", state, payload);
    const newState = state.merge({
      result: payload.result,
    });
    // console.warn(newState);

    return newState;
  },
  [UPDATE_SHOP]: (state, { payload }) => {
    // console.warn("UPSOP", state, payload);
    const newState = state.merge({
      result: payload.result,
    });
    // console.warn(newState);

    return newState;
  },
};

export const initialState = () => Map({
  result: {
    result: [
      {
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
    ],
  },
  items: [],
  addedItems: [],
  total: 0,
  currency: 'USD',
});

export default handleActions(reducers, initialState());
