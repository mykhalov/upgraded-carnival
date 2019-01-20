import { connect } from 'react-redux'
import { updateUsers } from '../actions/users'
import Search from './Search'

const actionCreators = {
  onSubmit: updateUsers,
}

const SearchConnect = connect(
  null,
  actionCreators,
)(Search)

export default SearchConnect
