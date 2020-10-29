import directive from '../utils/directive'
const componentPath = require.context('./', true, /index\.js$/)
const components = []
componentPath.keys().forEach(item => {
  if (/\/(\S+)\/index\.js$/.test(item)) {
    let name = RegExp.$1.replace(/\-(\w)/g, function(word, i) {
      return i.toUpperCase()
    })
    components.push({
      name: name,
      file: componentPath(item).default
    })
  }
})
console.log('component', components)
const install = function (Vue) {
  components.forEach(component => {
    if (component.file.isDirective) {
      directive(Vue, component.file)
    }
    Vue.component(component.name, component.file)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
