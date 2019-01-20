import { configureStore } from 'redux-starter-kit'
import users from './reducers/users'
import currentUser from './reducers/currentUser'

const store = configureStore({
  reducer: {
    users,
    currentUser,
  },
})

export default store
