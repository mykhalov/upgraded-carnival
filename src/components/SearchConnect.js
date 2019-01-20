import { connect } from 'react-redux'
import { fetchAndUpdateUsers } from '../actions/users'
import { updateCurrentUser } from '../actions/currentUser'
import Search from './Search'

const mapDispatchToProps = dispatch => ({
  onSubmit: async username => {
    await dispatch(fetchAndUpdateUsers(username))
    dispatch(updateCurrentUser(username))
  },
})

const SearchConnect = connect(
  null,
  mapDispatchToProps,
)(Search)

export default SearchConnect
