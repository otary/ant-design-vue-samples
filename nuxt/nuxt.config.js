module.exports = {
    /*
      ** Headers of the page
      */
    head: {
        title: '不求人导航',
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content: 'maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0'
            },
            {hid: 'description', name: 'description', content: '不求人导航'},
            {'http-equiv': 'pragma', content: 'no-cache'},
            {'http-equiv': 'cache-control', content: 'no-cache, no-store, must-revalidate'},
            {'http-equiv': 'expires', content: '0'},
            {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}, // 让IE使用最新的浏览器渲染
            {name: 'apple-mobile-web-app-capable', 'content': 'yes'} // 删除默认的苹果工具栏和菜单栏
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
     ** Global CSS 公共样式
     */
    css: ['~/styles/scss/index.scss', 'ant-design-vue/dist/antd.css'],
    vue: {
        config: {
            productionTip: true,
            devtools: true
        }
    },
    /**
     * 编译配置
     */
    build: {
        vendor: ['axios'],
        cache: true,
        parallel: true,
        extend(config, ctx) {
            /*
             ** Run ESLINT on save
             */
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules|.nuxt)/
                })
            }
            /**
             * // 自定义 ant-design-vue 主题颜色
             */
            // config.module.rules.push({
            //     test: /\.less$/,
            //     use: [{
            //         loader: 'less-loader',
            //         options: {
            //             modifyVars: {
            //                 'primary-color': '#2EA9DF',
            //                 'link-color': '#2EA9DF',
            //                 'border-radius-base': '4px'
            //             },
            //             javascriptEnabled: true
            //         }
            //     }]
            // })
        }
    },
    /**
     * API middleware 中间件
     */
    serverMiddleware: [
        // '~/api/index.js'
    ],
    /**
     * 第三方插件
     */
    plugins: [
        {src: '~/plugins/antd.js', ssr: true},
        {src: '~/plugins/i18n.js', ssr: true},
        {src: '~/plugins/route.js', ssr: true}
    ],
    /**
     * 全局拦截配置
     */
    router: {
        middleware: ['i18n', 'route']
    },
    /**
     * 加载风格
     */
    loading: {
        color: '#41B883'
    },
    /**
     * 请求地址
     */
    // env: {
    //     HOST: '192.168.91.203',
    //     PORT: '80'
    // },
    /**
     * 启动端口
     * 默认: 3000
     */
    server: {
        port: 3000,
        host: '0.0.0.0'
    },
    /**
     * 跨域代理
     */
    modules: ['@nuxtjs/axios', "@nuxtjs/proxy"],
    axios: {
        proxy: process.env.NODE_ENV === 'development', // 是否使用代理
        // prefix: '',
        credentials: true
    },
    proxy: {
        '/api/': {
            target: 'http://82.157.19.141:9596',
            changeOrigin: true,
            pathRewrite: {
                // '^/api': ''
            }
        }
    }
}
