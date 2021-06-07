import api from '@/api'
import {getTokenFromCookie, persitTokenToCookie, removeTokenFromCookie} from '@/auth'

export default {
  namespaced: true,
  state: {
    /**
     * 是否已登录
     */
    logged: false,
    token: '',
    userId: '',
    userName: '',
    nickName: '',
    avatar: ''
  },
  mutations: {
    SET_LOGGED(state, logged) {
      state.logged = logged;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      // 写入token
      persitTokenToCookie(token);
    },
    SET_USER_ID: (state, userId) => {
      state.userId = userId
    },
    /**
     * 设置用户名
     * @param state
     * @param userName
     * @constructor
     */
    SET_USER_NAME: (state, userName) => {
      state.userName = userName
    },
    /**
     * 设置用户头像
     * @param state
     * @param avatar
     * @constructor
     */
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    /**
     * 设置用户昵称
     * @param state
     * @param nickName
     */
    SET_NICK_NAME: (state, nickName) => {
      state.nickName = nickName
    }
  },
  actions: {
    /**
     * 用户登录
     * @param commit
     * @param userInfo
     * @returns {Promise<any>}
     */
    login({commit, dispatch}, userInfo) {
      return new Promise((resolve, reject) => {
        api.login(userInfo).then(data => {
          const {token} = data;
          commit('SET_TOKEN', token)
          commit('SET_LOGGED', true)

          // 获取用户详细信息
          dispatch('obtainUserInfo');

          resolve();
        }).catch(error => {
          reject(error)
        });
      })
    },
    /**
     * 获取用户信息
     * @param commit
     */
    obtainUserInfo({commit}) {
      return new Promise((resolve, reject) => {
        api.fetchLoggedUserInfo().then((data) => {
          const {userId, userName, nickName, roles, permissions, avatar} = data;

          commit('SET_USER_ID', userId)
          commit('SET_USER_NAME', userName)
          commit('SET_NICK_NAME', nickName)
          commit('SET_AVATAR', avatar)

          resolve();
        }).catch((error) => {
          console.log(error)
          reject(error)
        });
      })
    },
    /**
     * 获取token
     * @param commit
     * @param state
     * @returns {*}
     */
    obtainToken({commit, state}) {
      if (state.token) {
        return state.token;
      }
      const token = getTokenFromCookie();
      if (token) {
        commit('SET_TOKEN', token)
        commit('SET_LOGGED', true)
      }
      return token;
    },
    /**
     * 重置Token
     * @param commit
     */
    resetToken({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removeTokenFromCookie();
        resolve()
      })
    },
    /**
     * 退出
     * @param commit
     */
    logout({commit}) {
      return new Promise(resolve => {
        api.logout().then(() => {
          removeTokenFromCookie();
          location.reload();

          resolve();
        });
      })
    }
  }
}
