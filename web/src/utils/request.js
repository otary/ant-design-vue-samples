import axios from 'axios';
import qs from 'qs';
import {message} from "ant-design-vue";

// 创建axios实例
const service = axios.create({
    timeout: 60000,
    headers: {
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache'
    },
    paramsSerializer: function (params) {
        return qs.stringify(params, {indices: false})
    }
});

// 请求拦截
service.interceptors.request.use((config) => {

    return {
        // 增加时间戳参数
        ...config, params: {...(config.params || {}), _t: +new Date()}
    };
}, (error) => {
    Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data);
    },
    (error) => {
        console.error(error.response.data);
        message.error('操作出错!');
        return Promise.reject(error.response.data);
    }
);

export default service;

