import axios, { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { fetchUserFailure, fetchUserSuccess } from './actions'
import { FETCH_USER_REQUEST } from './actionTypes'
import { IUser } from './types'

const getUsers = () =>
  axios.get<IUser[]>('https://6433c7661c5ed06c9586812f.mockapi.io/api/v1/users')

// const deleteUsers = () =>
//   axios.delete<IUser[]>('https://6433c7661c5ed06c9586812f.mockapi.io/api/v1/users')

// const addUser = () =>
//   axios.post<IUser[]>('https://6433c7661c5ed06c9586812f.mockapi.io/api/v1/users')

// const editUser = () =>
//   axios.put<IUser[]>('https://6433c7661c5ed06c9586812f.mockapi.io/api/v1/users')

function* fetchUserSaga() {
  try {
    const response: AxiosResponse<IUser[]> = yield call(getUsers)
    yield put(
      fetchUserSuccess({
        users: response.data,
      }),
    )
  } catch (e: any) {
    yield put(
      fetchUserFailure({
        error: e.message,
      }),
    )
  }
}

function* userSaga() {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)])
}

export default userSaga
