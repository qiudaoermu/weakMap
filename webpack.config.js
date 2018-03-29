var path = require('path'),
    webpack = require('webpack');
module.exports = {
    mode:"development",
    entry: {
        main:'./fquery/init.js'
    },
    output: {
        path: path.resolve(__dirname, './fquery/public/'),
        filename: 'f.js'
    },
    devServer: {
        inline: true,
        port: 8099
    },
    devtool: 'source-map',
    module: {
        rules:[
            {
                //正则匹配后缀.js文件;
                test: /\.js$/,
                //需要排除的目录
                exclude: /(node_modules|bower_components)/,
                //加载babel-loader转译es6
                loaders: [
                    'babel-loader', // .babelrc 具体配置文件
                    //'eslint-loader'// 必须在 .babelrc 的后面
                ]
            }
        ]

    }
};