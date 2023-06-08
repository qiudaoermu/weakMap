const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const isDev = process.env.NODE_ENV;
const kid = process.env.vip;
console.log(isDev);
console.log(kid);
// require("@babel/polyfill");
// console.log(global)
const HTMLplugin = require("html-webpack-plugin");
const resolve = dir => path.resolve(__dirname, dir);

const ProgressBarPlugin = require('progress-bar-webpack-plugin');
console.log(path.resolve(__dirname, '../node_modules/element-ui'), '------------------------');
let config = {
  mode: "development",
  entry: [path.join(__dirname, "src/index.js")],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  resolve: {
    // alias: {
    //     'element-ui': resolve('src/element-ui')// 这样配置后 @ 可以指向 src 目录
    // },
    extensions: [".js", ".jsx", ".json", ".vue"] // 表示这几个的后缀名可以参略
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: [
          path.resolve(__dirname, "../node_modules/element-ui"),
          path.resolve(__dirname, "./src")
        ]
      },
      {
        test: /\.(jsx|js)$/,
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, "./src"),
          path.resolve(__dirname, "../node_modules/element-ui")
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.styl/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          "stylus-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass")
            }
          }
        ]
      },

      {
        test: /\.(gif|jpg|jpeg|png|svg|ttf|woff)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "[name]-output.[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: isDev ? '"development"' : '"production"'
    }), // 定义可以在前端使用的全局变量
    new HTMLplugin(),
    // new ProgressBarPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};

if (isDev == "development") {
  config.devtool = "#cheap-module-eval-source-map";
  config.devServer = {
    port: 8083,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
}
module.exports = config;
