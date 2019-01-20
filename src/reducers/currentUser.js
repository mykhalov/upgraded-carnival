import { createReducer } from 'redux-starter-kit'
import { updateCurrentUser } from '../actions/currentUser'

const currentUser = createReducer('', {
  [updateCurrentUser]: (state, action) => action.payload,
})

export default currentUser
