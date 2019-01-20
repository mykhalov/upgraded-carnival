import { configureStore } from 'redux-starter-kit'
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import repos from './reducers/repos'
import currentRepo from './reducers/currentRepo'

const store = configureStore({
  reducer: {
    users,
    currentUser,
    repos,
    currentRepo,
  },
})

export default store
