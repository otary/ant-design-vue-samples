const path = require('path')
const webpack = require("webpack");

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const IS_DEV = ["development"].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    public: '127.0.0.1:8080',
    proxy: {
      '/api': {
        target: 'http://localhost:8866',
        changeOrigin: true,
        pathRewrite: {}
      }
    }
  },
  productionSourceMap: !IS_PROD, // 生产环境关闭SourceMap
  parallel: require("os").cpus().length > 1,
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);

    // 删除moment除zh-cn中文包外的其它语言包
    config
      .plugin("ignore")
      .use(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
      );

    return config;
  },
  configureWebpack: {
    name: '',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@public': path.join(__dirname, 'public')
      }
    }
  }
}
