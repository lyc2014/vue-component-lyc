const { getOptions } =  require('loader-utils');
module.exports = function (souce) {
  const options = getOptions(this);
  if (options.path && this.resourcePath.indexOf(options.path) === -1) {
    return souce
  }
  if (options.path && this.resourcePath.indexOf(options.path) === 0) {
    if (options.whiteList && Array.isArray(options.whiteList)) {
      var name = ''
      try {
        name = this.resourcePath.split('/').slice(-1).toString()
      } catch {
        console.log(this.resourcePath + '的格式不正确')
      }
      if (options.whiteList.indexOf(name) === -1) {
        return souce
      }
    }
  }
  console.log('走了加密流程')
  var src = []
  for (let i = souce.length; i > 0; i--) {
    src.push(souce[i - 1])
  }
  var buf = Buffer.from(src)
  return buf
}
module.exports.raw = true