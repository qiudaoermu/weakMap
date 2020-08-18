// less-loader

const less = require('less')

function loader(source) {
  let css = ''
  less.render(source, (err, data) => {
      if (!err) {
        console.log(data.css)
        css = data.css
      } else {
        console.log(err)
        throw new Error(error)
      }
    })
    // console.log('css', css)
  return css
}
module.exports = loader
