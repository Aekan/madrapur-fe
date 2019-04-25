import { all } from 'redux-saga/effects'
import { exampleSaga } from './exampleSaga';
import { shopSaga } from './shopSaga';

export default function* sagas() {
  yield all([
    ...exampleSaga,
    ...shopSaga,
  ]);
}
