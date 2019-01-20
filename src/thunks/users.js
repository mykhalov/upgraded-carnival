import { users } from '../apis/github'
import { updateUsers } from '../actions'

const fetchAndUpdateUsers = username => async dispatch => {
  const payload = await users(username)
  dispatch(updateUsers([payload]))
}

export { updateUsers, fetchAndUpdateUsers }
