import { connect } from 'react-redux'
import RepoCard from './RepoCard'

const mapStateToProps = state => ({
  repo: state.repos[state.currentRepo],
})

const RepoCardConnect = connect(mapStateToProps)

export default RepoCardConnect(RepoCard)
export { RepoCardConnect }
