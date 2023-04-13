import { combineReducers } from 'redux'

import userReducer from './users/reducer'

const rootReducer = combineReducers({
  user: userReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
