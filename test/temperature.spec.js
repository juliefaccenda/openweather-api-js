import { mount, shallowMount } from '@vue/test-utils'
import MyComponent from '@/components/CityBox.vue'
import Vue from 'vue'
import Axios from 'axios'


describe('Mounted App', () => {
    let wrapper
    beforeAll(() => {
        wrapper = mount(MyComponent);
    })
    
    test('se as variaveis recebem os dados', () => {
        console.log(wrapper.vm.$data.city)
    })
    // test('O Componente é uma instancia do vue', () => {        
    //     expect(wrapper.isVueInstance()).toBeTruthy();
    // });
    
})