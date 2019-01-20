import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { SearchConnect } from './SearchConnect'
import { updateCurrentUser } from '../actions'

describe('SearchConnect component', () => {
  let store

  beforeEach(() => {
    store = {
      subscribe: () => null,
      dispatch: () => null,
      getState: () => null,
    }
  })

  test('provides onSubmit', async () => {
    store.dispatch = jest.fn()

    const Component = () => null
    const Connected = SearchConnect(Component)
    const wrapper = mount(
      <Provider store={store}>
        <Connected />
      </Provider>,
    )

    await wrapper.find(Component).prop('onSubmit')('octocat')

    expect(store.dispatch).toHaveBeenCalledWith(updateCurrentUser('octocat'))
  })
})
