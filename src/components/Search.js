import React from 'react'

const onSubmit = propsOnSubmit => event => {
  event.preventDefault()

  const username = event.nativeEvent.target.username.value
  propsOnSubmit(username)
}

const Search = ({ onSubmit: propsOnSubmit }) => (
  <form onSubmit={onSubmit(propsOnSubmit)}>
    <input type="search" name="username" defaultValue="growtofill" required />
    <button type="submit">Search</button>
  </form>
)

export default Search
