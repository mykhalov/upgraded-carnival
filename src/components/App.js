import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Search from './SearchConnect'
import UserCard from './UserCardConnect'

const App = () => (
  <Provider store={store}>
    <Search />
    <UserCard />
  </Provider>
)

export default App
