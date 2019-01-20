import { createReducer } from 'redux-starter-kit'
import { updateUsers } from '../actions/users'

const users = createReducer(
  {},
  {
    [updateUsers]: (state, action) => ({ ...state, [action.payload.login]: action.payload }),
  },
)

export default users
