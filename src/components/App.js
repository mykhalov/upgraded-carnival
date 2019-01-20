import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Search from './SearchConnect'
import UserCard from './UserCardConnect'
import ReposList from './ReposListConnect'
import RepoCard from './RepoCardConnect'

import './App.css'

const App = () => (
  <div className="row">
    <Provider store={store}>
      <div className="col">
        <Search />
        <UserCard />
        <ReposList />
      </div>
      <div className="col">
        <RepoCard />
      </div>
    </Provider>
  </div>
)

export default App
