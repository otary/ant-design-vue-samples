export default ({app, redirect, req}) => {

    console.log('process.server: ' + process.server)
    // eslint-disable-next-line
    let path,
        clientType = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    // 服务端渲染时判断客户端类型
    if (process.server) {
        // 根据request消息头，动态改变路由的跳转
        // let flag = req.headers['user-agent'].match(clientType)
        // eslint-disable-next-line
        // let mobileFlag = req.url.indexOf('/mobile') !== -1,
        //     computerFlag = req.url.indexOf('/computer') !== -1
        // if (flag) {
        //     if (computerFlag) {
        //         path = `/mobile${req.url.substr(9, req.url.length)}`
        //     } else {
        //         path = mobileFlag ? req.url : `/mobile${req.url}`
        //     }
        // } else {
        //     if (mobileFlag) {
        //         path = `/computer${req.url.substr(7, req.url.length)}`
        //     } else {
        //         path = computerFlag ? req.url : `/computer${req.url}`
        //     }
        // }
        // if (path !== req.url) {
        //     redirect({path: path})
        // }
    }
    // 客户端渲染时判断客户端类型
    if (process.client) {

    }
}
