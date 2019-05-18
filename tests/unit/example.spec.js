import { shallowMount } from '@vue/test-utils'
import Landing from '@/pages/Landing.vue'

describe('Landing.vue', () => {
    it('renders props.testData when passed', () => {
        const testData = 'Im a Test!'
        const wrapper = shallowMount(Landing, {
        propsData: { testData }
        })
        expect(wrapper.text()).toMatch(testData)
    })
})