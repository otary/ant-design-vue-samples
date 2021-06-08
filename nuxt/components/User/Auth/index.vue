<template>
  <div class="account-component">
    <div v-if="!isLogged" @click="handleOpenLoginForm">
      <a-icon type="user" />登录/注册
    </div>
    <div v-if="isLogged">
      <a-avatar class="menu-icon__user" icon="user"/> &nbsp;张三
    </div>

    <a-modal v-model="state.loginFormVisible" title="" footer="">
      <a-form class="user-login__form"
              ref="loginForm"
              :form="loginForm">
        <a-tabs
          :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
          @change="handleTabClick"
        >
          <!-- 帐号登录 -->
          <a-tab-pane key="usernameLoginTab" tab="账号密码登录">
            <!-- <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="账户或密码错误（admin/ant.design )" />-->
            <a-form-item>
              <a-input
                size="large"
                type="text"
                placeholder="请输入用户名"
                v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入用户名或邮箱地址' }], validateTrigger: 'change'}
              ]"
              >
                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input-password
                size="large"
                placeholder="请输入密码"
                v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
              ]"
              >
                <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input-password>
            </a-form-item>
          </a-tab-pane>
          <!-- /帐号登录 -->

          <!-- 手机号登录 -->
          <a-tab-pane key="mobileLoginTab" tab="手机号登录" disabled>
            <a-form-item>
              <a-input size="large" type="text" placeholder="手机号"
                       v-decorator="['mobile', {rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]">
                <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-item>

            <a-row :gutter="16">
              <a-col class="gutter-row" :span="16">
                <a-form-item>
                  <a-input size="large" type="text" placeholder="验证码"
                           v-decorator="['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]">
                    <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                  </a-input>
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="8">
                <a-button
                  tabindex="-1"
                  :disabled="state.smsSending"
                  @click.stop.prevent="sendSmsCode"
                  v-text="!state.smsSending && '获取验证码' || (state.time+' s')"
                ></a-button>
              </a-col>
            </a-row>
          </a-tab-pane>
          <!-- /手机号登录 -->
        </a-tabs>

        <a-form-item>
          <a-checkbox v-decorator="['rememberMe', { valuePropName: 'checked' }]">自动登录</a-checkbox>
          <nuxt-link
            :to="{ name: '/'}"
            style="float: right;"
          >忘记密码
          </nuxt-link>
        </a-form-item>

        <a-form-item>
          <a-button
            size="large"
            type="primary"
            htmlType="submit"
            class="user-login__submit-btn"
            :loading="state.logging"
            :disabled="state.logging"
            @click="handleLogin"
          >登录
          </a-button>
        </a-form-item>

        <div class="user-login__other">
          <span>其他登录方式</span>
          <a>
            <a-icon class="user-login__other-item-icon" type="alipay-circle"></a-icon>
          </a>
          <a>
            <a-icon class="user-login__other-item-icon" type="taobao-circle"></a-icon>
          </a>
          <a>
            <a-icon class="user-login__other-item-icon" type="weibo-circle"></a-icon>
          </a>
          <nuxt-link class="user-login__register-link" to="/user/register" @click.native="state.loginFormVisible = false;">注册账户</nuxt-link>
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "UserAuth",
    components: {},
    data() {
      return {
        loginForm: this.$form.createForm(this),
        state: {
          loginFormVisible: false,
          logging: false,
          smsSending: false,
          authMode: 1
        }
      }
    },
    methods: {
      ...mapActions({
        login: 'user/login'
      }),
      /**
       * 打开登录框
       */
      handleOpenLoginForm() {
        this.state.loginFormVisible = true;
      },
      /**
       * 登录
       * @param e
       */
      handleLogin(e) {
        e.preventDefault();

        this.loginForm.validateFields((err, data) => {
          if (!err) {
            this.state.logging = true;
            this.login({...data, authMode: '1'}).then(() => {
              this.state.loginFormVisible = false;
              this.$message.success("登录成功!");
            }).finally(()=> {
              this.state.logging = false;
            });
          }
        });
      },
      /**
       * Tab切换
       */
      handleTabClick() {

      },
      /**
       * 发送短信验证码
       */
      sendSmsCode() {

      }
    },
    computed: {
      ...mapState({
        isLogged: state => state.user.logged
      })
    }
  }
</script>

<style scoped lang="scss">
  .account-component {
    display: flex;
  }

  .menu-icon {
    &__user {
      width: 20px;
      height: 20px;
      line-height: 20px;

      ::v-deep .anticon-user {
        margin-right: 0;
      }
    }
  }

  .user-login {
    &__form {

    }

    &__submit-btn {
      width: 100%;
    }

    &__other {
      text-align: left;
      margin-top: 24px;
      line-height: 22px;

      &-item-icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 10px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #1890ff;
        }
      }
    }

    &__register-link {
      float: right;
    }
  }
</style>
