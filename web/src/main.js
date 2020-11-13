import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Row,
  Col,
  Menu,
  Anchor
} from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Anchor);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
