import { createSelector } from 'reselect';

const cartDataSelector = (state) => state.example;

const resultSelector = createSelector(
  cartDataSelector,
  (payload) => payload.get('result')
);

export const cartSelector = (state) => ({
  result: resultSelector(state),
});
