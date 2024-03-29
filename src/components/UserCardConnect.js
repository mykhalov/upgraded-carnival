import { connect } from 'react-redux'
import UserCard from './UserCard'

const mapStateToProps = state => ({
  user: state.users[state.currentUser],
})

const UserCardConnect = connect(mapStateToProps)

export default UserCardConnect(UserCard)
export { UserCardConnect }
