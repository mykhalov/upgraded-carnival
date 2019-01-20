import React from 'react'
import { shallow } from 'enzyme'
import RepoCard from './RepoCard'

describe('RepoCard component', () => {
  test('renders null', () => {
    const onSubmit = jest.fn()
    const wrapper = shallow(<RepoCard />)

    expect(wrapper.type()).toBe(null)
  })
})
