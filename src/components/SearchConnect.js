import { connect } from 'react-redux'
import { fetchAndUpdateUsers } from '../thunks/users'
import { fetchAndUpdateRepos } from '../thunks/repos'
import { updateCurrentUser, updateCurrentRepo } from '../actions'
import Search from './Search'

const mapDispatchToProps = dispatch => ({
  onSubmit: async username => {
    dispatch(updateCurrentUser(''))
    dispatch(updateCurrentRepo(''))

    await Promise.all([
      dispatch(fetchAndUpdateUsers(username)),
      dispatch(fetchAndUpdateRepos(username)),
    ])

    dispatch(updateCurrentUser(username))
  },
})

const SearchConnect = connect(
  null,
  mapDispatchToProps,
)

export default SearchConnect(Search)
export { SearchConnect }
