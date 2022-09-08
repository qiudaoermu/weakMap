

In production model ,zip your folder after build done

example: app -> app.zip

## install
```
npm install --save-dev webpack-file-plugin
```

## usage (as a plugin)

```
const webpackFilePlugin = require('webpack-file-plugin');
module.exports = {
  plugins: [
    new webpackFilePlugin()
  ]
}
```

## options:

```
new webpackFilePlugin({
  targetPath:'/app' //  nput path
  outPut:'app.zip'  // output path
})

```

