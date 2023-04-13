import { all, fork } from 'redux-saga/effects'
import userSaga from './users/saga'

export function* rootSaga() {
  yield all([fork(userSaga)])
}
