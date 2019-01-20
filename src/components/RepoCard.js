import React from 'react'

const RepoCard = ({ repo }) =>
  repo ? (
    <div>
      <div>{repo.description || <em>No description</em>}</div>
      <div>{repo.fork ? 'fork' : 'not a fork'}</div>
      <div>{repo.stargazers_count || 'no'} star(s)</div>
      <div>{repo.forks_count || 'no'} fork(s)</div>
    </div>
  ) : null

export default RepoCard
