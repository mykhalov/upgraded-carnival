import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { ReposListConnect } from './ReposListConnect'

describe('ReposListConnect component', () => {
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

  test('provides repos', () => {
    const spoonKnife = {
      full_name: 'octocat/Spoon-Knife',
      owner: {
        login: 'octocat',
      },
    }
    const helloWorld = {
      full_name: 'octocat/Hello-World',
      owner: {
        login: 'octocat',
      },
    }
    const emptyOne = {
      full_name: 'octobat/Empty-One',
      owner: {
        login: 'octobat',
      },
    }

    state.repos = {
      'octocat/Spoon-Knife': spoonKnife,
      'octocat/Hello-World': helloWorld,
      'octobat/Empty-One': emptyOne,
    }
    state.currentUser = 'octocat'

    const Component = () => null
    const Connected = ReposListConnect(Component)
    const wrapper = mount(
      <Provider store={store}>
        <Connected />
      </Provider>,
    )

    expect(wrapper.find(Component).prop('repos')).toEqual([spoonKnife, helloWorld])
  })

  test('provides currentRepo', () => {
    state.repos = {}
    state.currentUser = 'octocat'
    state.currentRepo = 'octocat/Spoon-Knife'

    const Component = () => null
    const Connected = ReposListConnect(Component)
    const wrapper = mount(
      <Provider store={store}>
        <Connected />
      </Provider>,
    )

    expect(wrapper.find(Component).prop('currentRepo')).toEqual('octocat/Spoon-Knife')
  })
})
