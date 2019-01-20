import currentRepo from './currentRepo'
import { updateCurrentRepo } from '../actions/currentRepo'

describe('currentRepo reducer', () => {
  test('returns default state', () => {
    expect(currentRepo(undefined, {})).toEqual('')
  })

  test('skips unknown action', () => {
    const state = 'Spoon-Knife'

    expect(currentRepo(state, {})).toEqual(state)
  })

  test('updates state', () => {
    const state = 'Spoon-Knife'
    const action = updateCurrentRepo('Hello-World')

    expect(currentRepo(state, action)).toEqual('Hello-World')
  })
})
