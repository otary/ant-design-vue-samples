import {request} from '@/plugins/request'

export default {

  /**
   * 登录
   */
  login(data) {
    return request.post('/api/users/login', data);
  },
  /**
   * 登出
   * @returns {*}
   */
  logout() {
    return request.post('/api/users/logout')
  },
  /**
   * 获取当前用户信息
   * @returns {*}
   */
  fetchLoggedUserInfo() {
    return request.get('/api/users/info');
  },

  /**
   * 发送验证码
   */
  sendCaptcha(data) {
    return request.post('/api/users/captcha/send', data)
  },

  /**
   * 用户注册
   */
  register(data) {
    return request.post('/api/users/register', data)
  }

}


