import { connect } from 'react-redux'
import { updateCurrentRepo } from '../actions'
import ReposList from './ReposList'

const mapStateToProps = state => ({
  repos: Object.values(state.repos)
    .filter(repo => repo.owner.login === state.currentUser)
    .slice(0, 5),
  currentRepo: state.currentRepo,
})

const actionCreators = {
  onSelect: updateCurrentRepo,
}

const ReposListConnect = connect(
  mapStateToProps,
  actionCreators,
)

export default ReposListConnect(ReposList)
export { ReposListConnect }
