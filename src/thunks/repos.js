import { repos } from '../apis/github'
import { updateRepos } from '../actions'

const fetchAndUpdateRepos = username => async dispatch => {
  const payload = await repos(username)
  dispatch(updateRepos(payload))
}

export { updateRepos, fetchAndUpdateRepos }
