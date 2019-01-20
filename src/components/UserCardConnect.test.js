import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { UserCardConnect } from './UserCardConnect'

describe('UserCardConnect component', () => {
  let store
  let state

  beforeEach(() => {
    state = {
      users: {},
      currentUser: '',
    }
    store = {
      subscribe: () => null,
      dispatch: () => null,
      getState: () => state,
    }
  })

  test('provides currentUser', () => {
    const octocat = {
      login: 'octocat',
    }

    state.users = {
      octocat,
    }
    state.currentUser = 'octocat'

    const Component = () => null
    const Connected = UserCardConnect(Component)
    const wrapper = mount(
      <Provider store={store}>
        <Connected />
      </Provider>,
    )

    expect(wrapper.find(Component).prop('user')).toEqual(octocat)
  })
})
