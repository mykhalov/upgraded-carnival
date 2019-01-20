import React from 'react'

const RepoCard = ({ repo }) =>
  repo ? (
    <div className="card">
      <p>{repo.description || <em>No description</em>}</p>
      <ul>
        <li>{repo.fork ? 'fork' : 'not a fork'}</li>
        <li>{repo.stargazers_count || 'no'} star(s)</li>
        <li>{repo.forks_count || 'no'} fork(s)</li>
      </ul>
    </div>
  ) : null

export default RepoCard
