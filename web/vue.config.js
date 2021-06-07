const path = require('path')
const webpack = require("webpack");

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
      '^/api': {
        target: 'http://119.45.252.139:9596',
       // target: 'http://localhost:9900',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '/'
        }
      }
    }
  },
  productionSourceMap: false, // 生产环境关闭SourceMap
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
        '@public': path.join(__dirname, 'public'),
        '@styles': path.join(__dirname, 'src', 'styles')
      }
    }
  }
}
