import {
  name
}
from './js/moduleA.js'
require('./style/init.styl')
require('./style/test.less')
const oli = document.createElement('li')
oli.innerHTML = 'this is lio'
document.body.appendChild(oli)

const oH1 = document.createElement('h1')
oH1.innerHTML = 'Hello ' + name
document.body.appendChild(oH1)
