// stylus-loader

const stylus = require('stylus')

function loader(source) {
  let css = ''
  stylus.render(source, (err, data) => {
    if (!err) {
      css = data
    } else {
      throw new Error(error)
    }
  })
  return css
}
module.exports = loader
