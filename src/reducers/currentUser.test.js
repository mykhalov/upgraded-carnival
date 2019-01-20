import currentUser from './currentUser'
import { updateCurrentUser } from '../actions/currentUser'

describe('currentUser reducer', () => {
  test('returns default state', () => {
    expect(currentUser(undefined, {})).toEqual('')
  })

  test('skips unknown action', () => {
    const state = 'octocat'

    expect(currentUser(state, {})).toEqual(state)
  })

  test('updates state', () => {
    const state = 'octocat'
    const action = updateCurrentUser('octobat')

    expect(currentUser(state, action)).toEqual('octobat')
  })
})
