const path = require('path')

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
