import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UserCard from '../UserCard.vue'

describe('UserCard', () => {
  it('renders user information', () => {
    const user = {
      name: 'John Doe',
      email: 'john@example.com',
      company: {
        name: 'Test Company',
      },
    }

    const wrapper = mount(UserCard, {
      props: {
        user,
      },
    })

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('john@example.com')
    expect(wrapper.text()).toContain('Test Company')
  })
})