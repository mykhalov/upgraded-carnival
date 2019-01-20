import { createReducer } from 'redux-starter-kit'
import { updateRepos } from '../actions'

const indexBy = key => (acc, item) => ({
  ...acc,
  [item[key]]: item,
})

const repos = createReducer(
  {},
  {
    [updateRepos]: (state, action) => action.payload.reduce(indexBy('full_name'), state),
  },
)

export default repos
