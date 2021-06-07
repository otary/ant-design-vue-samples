import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import animated from 'animate.css'
import '@/auth/permission'
import {
  Button,
  message,
  Layout,
  Icon,
  Menu,
  Row,
  Col,
  Divider,
  Card,
  List,
  Tabs,
  Form,
  Input,
  Space,
  Slider,
  Alert,
  Spin,
  Tag,
  Descriptions,
  Table,
  Switch,
  Modal
} from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(List);
Vue.use(Tabs);
Vue.use(Form);
Vue.use(Input);
Vue.use(Space);
Vue.use(Slider);
Vue.use(Alert);
Vue.use(Spin);
Vue.use(Tag);
Vue.use(Descriptions);
Vue.use(Table);
Vue.use(Switch);
Vue.use(Modal);

Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
