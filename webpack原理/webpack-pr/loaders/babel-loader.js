const babel = require('@babel/core')
const loaderUtils = require('loader-utils')

function loader(source, options) {
  console.log(options)
    // let options = loaderUtils.getOpztions(this)
    // let cb = this.async();
    // console.log(source, 'babel-loader-------------')
  const {
    code
  } = babel.transform(source, {
    sourceMap: true,
    ...options
  })
  return code
}

module.exports = loader
