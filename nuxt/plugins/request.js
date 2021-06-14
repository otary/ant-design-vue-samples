import axios from 'axios';
import qs from 'qs';
import {message} from "ant-design-vue";

// 创建axios实例
export const request = axios.create({
    timeout: 60000,
    headers: {
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache'
    },
    paramsSerializer: function (params) {
        return qs.stringify(params, {indices: false})
    }
});


export default function ({store}) {

    // 请求拦截
    request.interceptors.request.use((config) => {
        const {token} = store.state.user;
        if (token) {
            config.headers['Authorization'] = token;
        }

        return {
            // 增加时间戳参数
            ...config, params: {...(config.params || {}), _t: +new Date()}
        };
    }, (error) => {
        Promise.reject(error);
    });

    // 响应拦截
    request.interceptors.response.use(
        (response) => {
            return Promise.resolve(response.data);
        },
        (error) => {
            console.error(error.response.data);

            if (error.response.data) {
                const data = error.response.data;
                /**
                 *  40302 - 用户不存在
                 */
                if (data.code === 40302) {
                    message.error(data.msg)
                    return Promise.reject(error.response.data);
                }
            }

            if (error.response.status === 401) {
                message.error('认证已过期，请刷新!')

                // 清除cookie,刷新页面
                store.dispatch('user/resetToken').then(() => {
                    location.reload()
                });
            } else if (error.response.status === 404) {
                message.error('服务不存在!');
            } else if (error.response.status === 500) {
                message.error('服务异常, 请通知下站长!');
            } else if (error.response.status === 502 || error.response.status === 503) {
                message.error('服务器罢工了!');
            } else {
                message.error('未知异常!');
            }
            return Promise.reject(error.response.data);
        }
    );
}

