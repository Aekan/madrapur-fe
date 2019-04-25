import { createSelector } from 'reselect';

const shopDataSelector = (state) => {
  return state.shop;
};

const resultSelector = createSelector(
  shopDataSelector,
  (payload) => payload.get('result')
);

export const shopSelector = (state) => ({
  result: resultSelector(state),
});
