import { INC_COUNTER } from '../actionTypes';

const initialState = {
  counter: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INC_COUNTER: {
      const { counter } = action.payload;
      return {
        ...state,
        counter,
      };
    }
    default:
      return state;
  }
}
