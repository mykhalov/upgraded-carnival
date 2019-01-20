import { createAction } from 'redux-starter-kit'
import { users } from '../apis/github'

const updateUsersSuccess = createAction('update_users_success')

const updateUsers = username => async dispatch => {
  const payload = await users(username)
  dispatch(updateUsersSuccess(payload))
}

export { updateUsers }
