import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  // props 測試
  it('renders the msg prop', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
    })
    expect(wrapper.find('h1').text()).toBe('Hello Vitest')
  })

  // methods 測試
  it('increments count when button is clicked', async () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Click Test' },
    })
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(button.text()).toContain('1')
    await button.trigger('click')
    expect(button.text()).toContain('2')
  })
})
