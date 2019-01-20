import repos from './repos'
import { updateRepos } from '../actions/repos'

describe('users reducer', () => {
  test('returns default state', () => {
    expect(repos(undefined, {})).toEqual({})
  })

  test('skips unknown action', () => {
    const state = {
      'octocat/Spoon-Knife': {
        full_name: 'octocat/Spoon-Knife',
      },
    }

    expect(repos(state, {})).toEqual(state)
  })

  test('updates state', () => {
    const spoonKnife = {
      full_name: 'octocat/Spoon-Knife',
    }
    const helloWorld = {
      full_name: 'octocat/Hello-World',
    }
    const state = {
      'octocat/Spoon-Knife': spoonKnife,
    }
    const action = updateRepos([helloWorld])

    expect(repos(state, action)).toEqual({
      'octocat/Spoon-Knife': spoonKnife,
      'octocat/Hello-World': helloWorld,
    })
  })
})
