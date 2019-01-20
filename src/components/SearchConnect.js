import { connect } from 'react-redux'
import { fetchAndUpdateUsers } from '../actions/users'
import { fetchAndUpdateRepos } from '../actions/repos'
import { updateCurrentUser } from '../actions/currentUser'
import Search from './Search'

const mapDispatchToProps = dispatch => ({
  onSubmit: async username => {
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
)(Search)

export default SearchConnect
