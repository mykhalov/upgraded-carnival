import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { RepoCardConnect } from './RepoCardConnect'

describe('RepoCardConnect component', () => {
  let store
  let state

  beforeEach(() => {
    state = {
      repos: {},
      currentRepo: '',
    }
    store = {
      subscribe: () => null,
      dispatch: () => null,
      getState: () => state,
    }
  })

  test('provides repo', () => {
    const spoonKnife = {
      full_name: 'octocat/Spoon-Knife',
    }
    const helloWorld = {
      full_name: 'octocat/Hello-World',
    }

    state.repos = {
      'octocat/Spoon-Knife': spoonKnife,
      'octocat/Hello-World': helloWorld,
    }
    state.currentRepo = 'octocat/Spoon-Knife'

    const Component = () => null
    const Connected = RepoCardConnect(Component)
    const wrapper = mount(
      <Provider store={store}>
        <Connected />
      </Provider>,
    )

    expect(wrapper.find(Component).prop('repo')).toEqual(spoonKnife)
  })
})
