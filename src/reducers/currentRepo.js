import { createReducer } from 'redux-starter-kit'
import { updateCurrentRepo } from '../actions/currentRepo'

const currentRepo = createReducer('', {
  [updateCurrentRepo]: (state, action) => action.payload,
})

export default currentRepo
