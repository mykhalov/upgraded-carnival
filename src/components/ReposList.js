import React from 'react'

const ReposList = ({ repos, onSelect, currentRepo }) => (
  <ul>
    {repos &&
      repos.map(repo => (
        <li key={repo.full_name}>
          {repo.name}{' '}
          <button
            onClick={() => onSelect(repo.full_name)}
            disabled={repo.full_name === currentRepo}
          >
            View
          </button>
        </li>
      ))}
  </ul>
)

export default ReposList
