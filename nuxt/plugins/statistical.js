export default ({app: {router}, store}) => {

    /*
    ** 每次路由变更时进行pv统计
    */
    if (process.client && process.env.NODE_ENV === 'production') {
        router.afterEach((to, from) => {
            document.getElementById('baidu-tongji') && document.getElementById('baidu-tongji').remove();
            var _hmt = _hmt || [];
            (function () {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?c54ff74d1e9b3a84834d70113b630139";
                hm.id = "baidu-tongji";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        })
    }
}
