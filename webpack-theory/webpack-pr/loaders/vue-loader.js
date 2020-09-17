const { parse } = require('@vue/component-compiler-utils')
const loaderUtils = require('loader-utils')
const path = require('path');
function loadTemplateCompiler (loaderContext) {
  try {
    return require('vue-template-compiler')
  } catch (e) {
    if (/version mismatch/.test(e.toString())) {
      loaderContext.emitError(e)
    } else {
      loaderContext.emitError(new Error(
        `[vue-loader] vue-template-compiler must be installed as a peer dependency, ` +
        `or a compatible compiler implementation must be passed via options.`
      ))
    }
  }
}

module.exports = function (source) {
  let loaderContext = this
  console.log(source)
  console.log('---------==============source==============----------')
  const {
    target,
    request,
    minimize,
    sourceMap,
    rootContext,
    resourcePath,
    resourceQuery
  } = loaderContext
  
  const context = rootContext || process.cwd()
  const sourceRoot = path.dirname(path.relative(context, resourcePath))
  const filename = path.basename(resourcePath)

  let descriptor = parse({
    source,
    compiler: loadTemplateCompiler(loaderContext),
    filename,
    sourceRoot,
    needMap: sourceMap
  })
  console.log(descriptor)
  return source
}
