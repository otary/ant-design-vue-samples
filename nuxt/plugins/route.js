export default function ({app, route, store}) {

    // 白名单,不进行认证
    const whiteList = ['/*']

    function isWhitePath(path) {
        return whiteList.filter((pattern) => {
            return new RegExp(pattern).test(path);
        }).length > 0;
    }

    app.router.beforeEach(async (to, from, next) => {
        if (to.matched.length === 0) {
            console.log('未匹配到页面!')
        }

        let {logged, token, userName, userId} = store.state.user;

        // 已登录，直接跳过
        if (logged) {
            return next();
        }

        if (!token) {
            token = await store.dispatch('user/obtainToken');
        }

        if (!token) {
            // 没有Token，白名单内则直接访问
            if (isWhitePath(to.path)) {
                return next();
            } else {
                // 未登录，跳转到登录页
                return next(`/login?redirect=${to.path}`)
            }
        }

        // 已有token
        if (to.path === '/login') {
            // 访问登录页直接跳转首页
            return next({path: '/'})
        } else {
            if (userName) {
                return next();
            } else {
                store.dispatch('user/obtainUserInfo')
                return next();
            }
        }
        // next()
    })
}
