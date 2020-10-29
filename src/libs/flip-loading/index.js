import directive from '../../utils/directive'
import flipLoading from './flip-loading'

flipLoading.install = (Vue) => {
  directive(Vue, flipLoading)
  Vue.component(flipLoading.name, flipLoading)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(flipLoading)
}

flipLoading.isDirective = true
export default flipLoading