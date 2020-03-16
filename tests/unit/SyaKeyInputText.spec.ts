import Vue from 'vue'
import { mount } from "@vue/test-utils";
import SyaKeyInputText from '@/components/sya-KeyInputText/SyaKeyInputText.vue' 

describe('SyaKeyInputText', () => {
  const props = {
    text: "hello world!"
  }

  const wrapper = mount(SyaKeyInputText, {
    propsData: {
      ...props
    }
  })


  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="sya-key-input-text"></span>')
    console.log(wrapper.vm.$data.displayText)
  })
})
