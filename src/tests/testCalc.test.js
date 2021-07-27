import { expect, it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Calc from '../components/Calc'

describe("Calculator input tests", ()=>{
    it('Test operand input value', ()=>{
        const wrapper = mount(Calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test operand2 input value', ()=>{
        const wrapper = mount(Calc)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        expect(wrapper.vm.operand2).toBe(1)
    })


    it('Test method sum', ()=>{
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const methodSum = wrapper.find('button[name="+"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test method sub', ()=>{
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const methodSum = wrapper.find('button[name="-"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(0)
    })

    it('Test method div', ()=>{
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const methodSum = wrapper.find('button[name="/"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(1)
    })

    it('Test method mul', ()=>{
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const methodSum = wrapper.find('button[name="*"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test method mul', ()=>{
        const wrapper = mount(Calc)

        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const methodSum = wrapper.find('button[name="*"]')
        methodSum.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it('Test keyboard checkbox input', ()=>{
        const wrapper = mount(Calc)
        const checkb = wrapper.find('input[name=keyboardcheckbox]')
        checkb.setChecked()
        expect(wrapper.vm.showvk).toBe(true)
    })

    it('Test keyboard input', ()=>{
        const wrapper = mount(Calc)
        const checkb = wrapper.find('input[name=keyboardcheckbox]')
        checkb.setChecked()
        
        wrapper.vm.$nextTick(()=>{
            const radio1 = wrapper.find('input[name=radioop1]')
            radio1.setChecked() 

            const btn1 = wrapper.find('button[name=btn1]')
            btn1.trigger('click')

            const btn2 = wrapper.find('button[name=btn2]')
            btn2.trigger('click')

            const btn3 = wrapper.find('button[name=btn3]')
            btn3.trigger('click')

            const btn4 = wrapper.find('button[name=btn4]')
            btn4.trigger('click')

            const btn5 = wrapper.find('button[name=btn5]')
            btn5.trigger('click')

            const btn6 = wrapper.find('button[name=btn6]')
            btn6.trigger('click')

            const btn7 = wrapper.find('button[name=btn7]')
            btn7.trigger('click')

            const btn8 = wrapper.find('button[name=btn8]')
            btn8.trigger('click')
             
            const btn9 = wrapper.find('button[name=btn9]')
            btn9.trigger('click')

            const btn0 = wrapper.find('button[name=btn0]')
            btn0.trigger('click')

            expect(wrapper.vm.operand1).toBe(1234567890) 
        })

        
    })

    it('Test keyboard input 2', ()=>{
        const wrapper = mount(Calc)
        const checkb = wrapper.find('input[name=keyboardcheckbox]')
        checkb.setChecked()
        
        wrapper.vm.$nextTick(()=>{
            const radio1 = wrapper.find('input[name=radioop2]')
            radio1.setChecked() 

            const btn1 = wrapper.find('button[name=btn1]')
            btn1.trigger('click')

            const btn2 = wrapper.find('button[name=btn2]')
            btn2.trigger('click')

            const btn3 = wrapper.find('button[name=btn3]')
            btn3.trigger('click')

            const btn4 = wrapper.find('button[name=btn4]')
            btn4.trigger('click')

            const btn5 = wrapper.find('button[name=btn5]')
            btn5.trigger('click')

            const btn6 = wrapper.find('button[name=btn6]')
            btn6.trigger('click')

            const btn7 = wrapper.find('button[name=btn7]')
            btn7.trigger('click')

            const btn8 = wrapper.find('button[name=btn8]')
            btn8.trigger('click')
             
            const btn9 = wrapper.find('button[name=btn9]')
            btn9.trigger('click')

            const btn0 = wrapper.find('button[name=btn0]')
            btn0.trigger('click')

            expect(wrapper.vm.operand2).toBe(1234567890) 
        })

        
    })

    it('Test erasing', ()=>{
        const wrapper = mount(Calc)
        const checkb = wrapper.find('input[name=keyboardcheckbox]')
        checkb.setChecked()
        
        wrapper.vm.$nextTick(()=>{
            const radio1 = wrapper.find('input[name=radioop2]')
            radio1.setChecked() 

            const btn1 = wrapper.find('button[name=btn1]')
            btn1.trigger('click')

            const btn2 = wrapper.find('button[name=btn2]')
            btn2.trigger('click')

            const erbtn = wrapper.find('button[name=erbtn]')
            erbtn.trigger('click')
            expect(wrapper.vm.operand2).toBe(1) 
        })

        
    })
})