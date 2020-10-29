import directive from '../../utils/directive'
import circleLoading from './circle-loading'

circleLoading.install = (Vue) => {
  directive(Vue, circleLoading)
  Vue.component(circleLoading.name, circleLoading)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(circleLoading)
}

circleLoading.isDirective = true
export default circleLoading