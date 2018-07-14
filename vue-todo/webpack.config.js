const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const isDev = process.env.NODE_ENV;
const kid = process.env.vip;
console.log(isDev);
console.log(kid);
require("babel-polyfill");
//console.log(global)
const HTMLplugin = require("html-webpack-plugin");


let config = {
    mode:"development",
    entry:[path.join(__dirname,'src/index.js')],
    output: {
        filename: "bundle.[hash:8].js",
        path: path.join(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:"vue-loader",
                exclude:'/node_modules'
            },
            {
                test:/\.(jsx|js)$/,
                loader: "babel-loader",
                "include": [path.resolve(__dirname, './src')]
            },
            {
               test:/\.css$/,
               use:[
                   'style-loader',
                   'css-loader'
               ]
            },
            {
              test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            },

            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit:1024,
                            name:'[name]-output.[ext]'
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV:isDev?'"development"':'"production"'
        }),//定义可以在前端使用的全局变量
        new HTMLplugin()
    ]
};

if(isDev=="development"){
    config.devtool = "#cheap-module-eval-source-map";
    config.devServer = {
        port:8080,
        host:'0.0.0.0',
        overlay:{
            errors:true,
        },
        hot:true
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config;
