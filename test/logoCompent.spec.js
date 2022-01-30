import { mount } from '@vue/test-utils'
import Logo from '../components/Logo';
import CityBox from '../components/CityBox';

describe('Logo', () => {
  test('Logo mount', () => {
    const wrapper = mount(Logo);
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('CityBox', () => {
  test('CityBox mount', () => {
    const wrapper = mount(CityBox);
    expect(wrapper.vm).toBeTruthy()
  })
})