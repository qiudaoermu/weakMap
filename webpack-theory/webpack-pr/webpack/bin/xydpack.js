#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const Compiler = require('../lib/compiler.js')
const config = require('../../webpack.config.js')

const compiler = new Compiler(config)


compiler.hooks.failed.tap('failed',(err)=>{
  console.log(err,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
})
compiler.run()
