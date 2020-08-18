## **Install**

```
npm install --save-dev webpack-afteremit-zipfolder-plugin
```
## Usage (as a plugin)

```
const DistZipWebpackPlugin = require('webpack-afteremit-zipfolder-plugin');
module.exports = {
  plugins: [
    new DistZipWebpackPlugin()
  ]
}
```

## 说明:

In production model ,zip your folder after build done

生产模式，打包完成后，对某个文件压缩

 app -> app.zip

## API:

```
new DistZipWebpackPlugin(options)
  targetPath:'' //  输入路径

  outPut:'' // 输出路径
```
## ex:

```
  {targetPath:'/app',outPut:'app.zip'}
```
