const directive = (Vue, component) => {
  const Mask = Vue.extend(component)
  const toggleLoading = function (el, binding) {
    if (binding.value) {
      Vue.nextTick(() => {
        if (binding.modifiers.fullscreen) {
          //  全屏情况下
          document.body.appendChild(el.mask)
        } else {
          //  非全屏情况下
          if (!el.parentNode.style.position || el.parentNode.style.position === 'static') {
            el.parentNode.style.position = 'relative'
          }
          el.appendChild(el.mask)
        }
      })
    } else {
      //  移除节点
      el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask)
      el.instance && el.instance.$destroy()
    }
  }
  Vue.directive(component.name, {
    //  只调用一次，可以进行一次初始化
    bind (el, binding) {
      const mask = new Mask({
        el: document.createElement('div')
      }) 
      el.instance = mask
      el.mask = mask.$el
      toggleLoading(el, binding)
    },
    //  所在组件的 VNode 更新时触发
    update (el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding)
      }
    },
    //  指令与元素解绑时触发
    unbind (el) {
      el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask)
      el.instance && el.instance.$destroy()
    }
  })
}
export default directive
