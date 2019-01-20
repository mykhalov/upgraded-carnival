import { createAction } from 'redux-starter-kit'

export const updateCurrentRepo = createAction('current_repo/update')
export const updateCurrentUser = createAction('current_user/update')
export const updateRepos = createAction('repos/update')
export const updateUsers = createAction('users/update')
