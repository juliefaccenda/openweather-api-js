import { mount } from '@vue/test-utils'
import Logo from '../components/Logo';

describe('Logo', () => {
  test('Logo mount', () => {
    const wrapper = mount(Logo);
    expect(wrapper.vm).toBeTruthy()
  })
})