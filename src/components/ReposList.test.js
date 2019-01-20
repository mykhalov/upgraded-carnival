import React from 'react'
import { shallow } from 'enzyme'
import ReposList from './ReposList'

describe('ReposList component', () => {
  test('renders items', () => {
    const repos = [{ full_name: 'octocat/Spoon-Knife' }, { full_name: 'octocat/Hello-World' }]
    const wrapper = shallow(<ReposList repos={repos} />)

    expect(wrapper.find('li')).toHaveLength(2)
  })

  test('calls onSelect', () => {
    const repos = [{ full_name: 'octocat/Spoon-Knife' }, { full_name: 'octocat/Hello-World' }]
    const onSelect = jest.fn()
    const wrapper = shallow(<ReposList repos={repos} onSelect={onSelect} />)

    wrapper
      .find('button')
      .at(0)
      .simulate('click')
    expect(onSelect).toHaveBeenCalledWith('octocat/Spoon-Knife')

    wrapper
      .find('button')
      .at(1)
      .simulate('click')
    expect(onSelect).toHaveBeenCalledWith('octocat/Hello-World')
  })

  test('renders view button for current repo disabled', () => {
    const repos = [{ full_name: 'octocat/Spoon-Knife' }, { full_name: 'octocat/Hello-World' }]
    const wrapper = shallow(<ReposList repos={repos} currentRepo="octocat/Spoon-Knife" />)

    expect(
      wrapper
        .find('button')
        .at(0)
        .prop('disabled'),
    ).toBe(true)

    expect(
      wrapper
        .find('button')
        .at(1)
        .prop('disabled'),
    ).toBe(false)
  })
})
