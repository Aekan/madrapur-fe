import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const GET_CART = 'app/shop/GET_CART';
const UPDATE_CART = 'app/shop/UPDATE_CART';

export const constants = {
  GET_CART,
  UPDATE_CART,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getCart = createAction(GET_CART, () => ({}));
export const updateCart = createAction(UPDATE_CART, (result) => ({ result }));

export const actions = {
  getCart,
  updateCart,
};

export const reducers = {
  [UPDATE_CART]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  result: '',
})

export default handleActions(reducers, initialState());