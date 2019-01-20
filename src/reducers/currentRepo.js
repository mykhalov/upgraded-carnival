import { createReducer } from 'redux-starter-kit'
import { updateCurrentRepo } from '../actions'

const currentRepo = createReducer('', {
  [updateCurrentRepo]: (state, action) => action.payload,
})

export default currentRepo
