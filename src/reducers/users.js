import { createReducer } from 'redux-starter-kit'
import { updateUsers } from '../actions'

const indexBy = key => (acc, item) => ({
  ...acc,
  [item[key]]: item,
})

const users = createReducer(
  {},
  {
    [updateUsers]: (state, action) => action.payload.reduce(indexBy('login'), state),
  },
)

export default users
