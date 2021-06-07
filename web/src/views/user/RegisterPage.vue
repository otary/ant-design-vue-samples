<template>
  <div class="user-register__container">
    <h3>注册</h3>
    <a-form ref="formRegister" :form="registerForm">
      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="用户名"
          v-decorator="['username', {rules: [{ required: true,  message: '请输入用户名' }], validateTrigger: ['change', 'blur']}]"
        ></a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="邮箱"
          v-decorator="['email', {rules: [{ required: true, type: 'email', message: '请输入邮箱地址' }], validateTrigger: ['change', 'blur']}]"
        ></a-input>
      </a-form-item>

      <a-popover
        placement="rightTop"
        :trigger="['focus']"
        :getPopupContainer="(trigger) => trigger.parentElement"
        v-model="state.passwordLevelChecked">
        <template slot="content">
          <div :style="{ width: '240px' }">
            <div :class="['user-register__password-level', passwordLevelClass]">强度：<span>{{ passwordLevelName }}</span>
            </div>
            <a-progress :percent="state.percent" :showInfo="false" :strokeColor=" passwordLevelColor "/>
            <div style="margin-top: 10px;">
              <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
            </div>
          </div>
        </template>
        <a-form-item>
          <a-input-password
            size="large"
            @click="handlePasswordInputClick"
            placeholder="至少6位密码，区分大小写"
            v-decorator="['password', {rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"
          ></a-input-password>
        </a-form-item>
      </a-popover>
      <a-form-item>
        <a-input-password
          size="large"
          placeholder="确认密码"
          v-decorator="['password2', {rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"
        ></a-input-password>
      </a-form-item>

      <!-- <a-form-item>
         <a-input size="large" placeholder="11 位手机号"
                  v-decorator="['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]">
           <a-select slot="addonBefore" size="large" defaultValue="+86">
             <a-select-option value="+86">+86</a-select-option>
             <a-select-option value="+87">+87</a-select-option>
           </a-select>
         </a-input>
       </a-form-item>-->

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
            class="user-register__captcha-btn"
            size="large"
            :disabled="state.smsSending"
            @click.stop.prevent="getCaptcha"
            v-text="!state.smsSending && '获取验证码'||(state.time+' s')"></a-button>
        </a-col>
      </a-row>

      <a-row :gutter="16">
        <a-col class="gutter-row" :span="14">
          <a-form-item>
            <a-button
              size="large"
              type="primary"
              htmlType="submit"
              class="user-register__submit-btn"
              :loading="state.submitting"
              :disabled="state.submitting"
              @click.stop.prevent="handleSubmit">注册
            </a-button>
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="10">
          <router-link class="user-register__login-link" :to="{ path: '/' }">使用已有账户登录</router-link>
        </a-col>
      </a-row>

    </a-form>
  </div>
</template>

<script>

  const levelNames = {
    0: '低',
    1: '低',
    2: '中',
    3: '强'
  }

  const levelClass = {
    0: 'error',
    1: 'error',
    2: 'warning',
    3: 'success'
  }

  const levelColor = {
    0: '#ff0000',
    1: '#ff0000',
    2: '#ff7e05',
    3: '#52c41a'
  }

  export default {
    name: "RegisterPage",
    data() {
      return {
        registerForm: this.$form.createForm(this),

        state: {
          time: 60,
          smsSending: false,
          passwordLevel: 0,
          passwordLevelChecked: false,
          percent: 10,
          progressColor: '#FF0000',
          submitting: false
        }
      }
    },
    methods: {
      /**
       * 检查密码正确性
       * @param rule
       * @param value
       * @param callback
       */
      handlePasswordLevel(rule, value, callback) {
        let level = 0

        // 判断这个字符串中有没有数字
        if (/[0-9]/.test(value)) {
          level++
        }
        // 判断字符串中有没有字母
        if (/[a-zA-Z]/.test(value)) {
          level++
        }
        // 判断字符串中有没有特殊符号
        if (/[^0-9a-zA-Z_]/.test(value)) {
          level++
        }
        this.state.passwordLevel = level
        this.state.percent = level * 30
        if (level >= 2) {
          if (level >= 3) {
            this.state.percent = 100
          }
          callback()
        } else {
          if (level === 0) {
            this.state.percent = 10
          }
          callback(new Error('密码强度不够'))
        }
      },
      /**
       * 两次密码比对
       * @param rule
       * @param value
       * @param callback
       */
      handlePasswordCheck(rule, value, callback) {
        const password = this.form.getFieldValue('password')
        if (value === undefined) {
          callback(new Error('请输入密码'))
        }
        if (value && password && value.trim() !== password.trim()) {
          callback(new Error('两次密码不一致'))
        }
        callback()
      },
      handlePasswordInputClick() {
        /*if (!this.isMobile()) {
          this.state.passwordLevelChecked = true
          return
        }*/
        // 弹出密码强度提示框
        this.state.passwordLevelChecked = true
      },
      /**
       * 手机号检测
       * @param rule
       * @param value
       * @param callback
       */
      handlePhoneCheck(rule, value, callback) {
        console.log('handlePhoneCheck, rule:', rule)
        console.log('handlePhoneCheck, value', value)
        console.log('handlePhoneCheck, callback', callback)

        callback()
      },
      /**
       * 获取验证码
       * @param e
       */
      getCaptcha(e) {
        e.preventDefault()
        const {registerForm: {validateFields}, state, $message, $notification} = this

        validateFields(['email'], {force: true},
          (err, values) => {
            if (!err) {
              state.smsSending = true

              const interval = window.setInterval(() => {
                if (state.time-- <= 0) {
                  state.time = 60
                  state.smsSending = false
                  window.clearInterval(interval)
                }
              }, 1000)

              const hide = $message.loading('验证码发送中..', 0)

              /*getSmsCaptcha({mobile: values.mobile}).then(res => {
                setTimeout(hide, 2500)
                $notification['success']({
                  message: '提示',
                  description: '验证码获取成功，您的验证码为：' + res.result.captcha,
                  duration: 8
                })
              }).catch(err => {
                setTimeout(hide, 1)
                clearInterval(interval)
                state.time = 60
                state.smsSendBtn = false
                this.requestFailed(err)
              })*/
            }
          }
        )
      },

      /**
       * 提交
       */
      handleSubmit() {
        const {form: {validateFields}, state, $router} = this
        validateFields({force: true}, (err, values) => {
          if (!err) {
            state.passwordLevelChecked = false
            $router.push({name: 'registerResult', params: {...values}})
          }
        })
      },

      /**
       *
       * @param err
       */
      requestFailed(err) {
        this.$notification['error']({
          message: '错误',
          description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
          duration: 4
        })
        this.registerBtn = false
      }

    },
    computed: {
      passwordLevelClass() {
        return levelClass[this.state.passwordLevel]
      },
      passwordLevelName() {
        return levelNames[this.state.passwordLevel]
      },
      passwordLevelColor() {
        return levelColor[this.state.passwordLevel]
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-register {
    &__container {
      width: 368px;
      min-width: 260px;
      margin: 0 auto;
      padding-top: 150px;
    }

    &__submit-btn {
      width: 100%;
    }

    &__password-level {
      &.error {
        color: #ff0000;
      }

      &.warning {
        color: #ff7e05;
      }

      &.success {
        color: #52c41a;
      }
    }

    &__captcha-btn {
      display: block;
      width: 100%;
      height: 40px;
    }

    &__login-link {
      float: right;
      line-height: 40px;
    }
  }
</style>
