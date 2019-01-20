import { createAction } from 'redux-starter-kit'
import { users } from '../apis/github'

const updateUsers = createAction('users/update')

const fetchAndUpdateUsers = username => async dispatch => {
  const payload = await users(username)
  dispatch(updateUsers([payload]))
}

export { updateUsers, fetchAndUpdateUsers }
