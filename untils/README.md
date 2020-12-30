# untils

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1.验证类
  validator.js
    手机
    邮编
    URL
    身份证
    邮箱
2.日期类
  dayjs
    日期格式化
    获取前面的日期 获取后面的日期
3.数据操作
  lodash.js
  深拷贝 _.cloneDeep(object)
  去重 _.uniq(array)
  数组合并多维 concat
  过滤非真元素 compact
    ex: _.compact([0, 1, false, 2, '', 3]);
    // => [1, 2, 3]
