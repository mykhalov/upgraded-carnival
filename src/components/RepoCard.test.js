import React from 'react'
import { shallow } from 'enzyme'
import RepoCard from './RepoCard'

describe('RepoCard component', () => {
  test('renders null', () => {
    const wrapper = shallow(<RepoCard />)

    expect(wrapper.type()).toBe(null)
  })
})
