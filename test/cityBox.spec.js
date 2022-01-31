import { mount } from '@vue/test-utils';
import CityBox from '../components/CityBox';


describe('CityBox', () => {
  test('CityBox mount', () => {
    const wrapper = mount(CityBox);
    expect(wrapper.vm).toBeTruthy()
  })
})