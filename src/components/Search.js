import React from 'react'

const onSubmit = propsOnSubmit => event => {
  event.preventDefault()

  const username = event.nativeEvent.target.username.value
  propsOnSubmit(username)
}

const Search = ({ onSubmit: propsOnSubmit }) => (
  <form onSubmit={onSubmit(propsOnSubmit)}>
    <input name="username" defaultValue="growtofill" required className="input" />
    <button type="submit" className="button">
      Search
    </button>
  </form>
)

export default Search
