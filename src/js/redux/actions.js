/* eslint-disable no-plusplus */
import { INC_COUNTER } from './actionTypes';

export const incCounter = (counter) => {
  const c = counter + 1;

  return ({
    type: INC_COUNTER,
    payload: {
      counter: c,
    },
  });
};
