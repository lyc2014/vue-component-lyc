import directive from '../../utils/directive'
import boxLoading from './box-loading'

boxLoading.install = (Vue) => {
  directive(Vue, boxLoading)
  Vue.component(boxLoading.name, boxLoading)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(boxLoading)
}

boxLoading.isDirective = true
export default boxLoading