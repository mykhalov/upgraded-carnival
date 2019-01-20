import users from './users'
import { updateUsers } from '../actions'

describe('users reducer', () => {
  test('returns default state', () => {
    expect(users(undefined, {})).toEqual({})
  })

  test('skips unknown action', () => {
    const state = {
      octocat: {
        login: 'octocat',
      },
    }

    expect(users(state, {})).toEqual(state)
  })

  test('updates state', () => {
    const octocat = {
      login: 'octocat',
    }
    const octobat = {
      login: 'octobat',
    }
    const state = {
      octocat,
    }
    const action = updateUsers([octobat])

    expect(users(state, action)).toEqual({
      octocat,
      octobat,
    })
  })
})
