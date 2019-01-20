import React from 'react'

const ReposList = ({ repos, onSelect }) => (
  <ul>
    {repos && repos.map(repo => <li onClick={() => onSelect(repo.full_name)}>{repo.name}</li>)}
  </ul>
)

export default ReposList
