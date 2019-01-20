import { createReducer } from 'redux-starter-kit'
import { updateCurrentUser } from '../actions'

const currentUser = createReducer('', {
  [updateCurrentUser]: (state, action) => action.payload,
})

export default currentUser
