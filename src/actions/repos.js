import { createAction } from 'redux-starter-kit'
import { repos } from '../apis/github'

const updateRepos = createAction('repos/update')

const fetchAndUpdateRepos = username => async dispatch => {
  const payload = await repos(username)
  dispatch(updateRepos(payload))
}

export { updateRepos, fetchAndUpdateRepos }
