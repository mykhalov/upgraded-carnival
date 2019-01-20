import React from 'react'
import { shallow } from 'enzyme'
import UserCard from './UserCard'

describe('UserCard component', () => {
  test('renders null', () => {
    const wrapper = shallow(<UserCard />)

    expect(wrapper.type()).toBe(null)
  })
})
