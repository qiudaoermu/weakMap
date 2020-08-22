const path = require('path');
const webpack = require('./webpack/bin/webpack.js');
const middleware = require('./webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();
const swig = require('swig')

app.use(express.static(path.join(__dirname, '/dist')));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.use(
  middleware(compiler, {
    // webpack-dev-middleware options
  })
);

app.listen(3002, () => console.log('Example app listening on port 3002!'));
