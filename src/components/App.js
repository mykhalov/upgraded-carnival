import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Search from './SearchConnect'
import UserCard from './UserCardConnect'
import ReposList from './ReposListConnect'
import RepoCard from './RepoCardConnect'

const App = () => (
  <Provider store={store}>
    <Search />
    <UserCard />
    <ReposList />
    <RepoCard />
  </Provider>
)

export default App
