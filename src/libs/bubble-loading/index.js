import directive from '../../utils/directive'
import bubbleLoading from './bubble-loading'

bubbleLoading.install = (Vue) => {
  directive(Vue, bubbleLoading)
  Vue.component(bubbleLoading.name, bubbleLoading)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(bubbleLoading)
}

bubbleLoading.isDirective = true
export default bubbleLoading