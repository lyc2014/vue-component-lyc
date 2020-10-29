import numberInput from './number-input.vue'

numberInput.install = function (Vue) {
  Vue.component(numberInput.name, numberInput)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(numberInput)
}

export default numberInput