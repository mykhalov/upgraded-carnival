import { createReducer } from 'redux-starter-kit'
import { updateCurrentUser } from '../actions/currentUser'

const users = createReducer('', {
  [updateCurrentUser]: (state, action) => action.payload,
})

export default users
