import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'

describe('Search component', () => {
  test('calls onSubmit', () => {
    const onSubmit = jest.fn()
    const wrapper = shallow(<Search onSubmit={onSubmit} />)
    const event = {
      nativeEvent: {
        target: {
          username: {
            value: 'octocat',
          },
        },
      },
      preventDefault: jest.fn(),
    }

    wrapper.find('form').simulate('submit', event)

    expect(onSubmit).toHaveBeenCalledWith('octocat')
    expect(event.preventDefault).toHaveBeenCalled()
  })
})
