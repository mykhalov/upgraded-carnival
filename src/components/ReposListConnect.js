import { connect } from 'react-redux'
import { updateCurrentRepo } from '../actions/currentRepo'
import ReposList from './ReposList'

const mapStateToProps = state => ({
  repos: Object.values(state.repos)
    .filter(repo => repo.owner.login === state.currentUser)
    .slice(0, 5),
})

const actionCreators = {
  onSelect: updateCurrentRepo,
}

const RepoListConnect = connect(
  mapStateToProps,
  actionCreators,
)(ReposList)

export default RepoListConnect
