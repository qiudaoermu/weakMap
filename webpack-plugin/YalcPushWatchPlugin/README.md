
Automatic execute `yalc push` if you are use yalc when your package is changed.


### install

```
npm i yalcPushWatchPlugin -save-dev
```

### usage



1. install yalc

```
install yalce -g
```
2. yalc push your package 
```
yalc publish
```

3. add to your webpack 


```
const YalcPushWatchPlugin = require('YalcPushWatchPlugin');
new YalcPushWatchPlugin({
  watchPushAction: true, // open watching Model
  linkName: "projectA", // your main package name
})
```

4.start your project

enjoy yourslef~~~