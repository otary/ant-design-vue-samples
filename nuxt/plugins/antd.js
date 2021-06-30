import Vue from 'vue'

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import {
    Alert,
    Button,
    message,
    Card,
    Col,
    Descriptions,
    Divider,
    Form,
    Icon,
    Input,
    Layout,
    List,
    Menu,
    Row,
    Slider,
    Space,
    Spin,
    Switch,
    Table,
    Tabs,
    Tag,
    Statistic,
    Radio,
    Modal,
    Checkbox,
    Badge,
    Tooltip,
    Avatar
} from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button)
    .use(Layout)
    .use(Menu)
    .use(Icon)
    .use(Divider)
    .use(Row)
    .use(Col)
    .use(Card)
    .use(List)
    .use(Tabs)
    .use(Form)
    .use(Input)
    .use(Space)
    .use(Slider)
    .use(Alert)
    .use(Spin)
    .use(Tag)
    .use(Descriptions)
    .use(Table)
    .use(Switch)
    .use(Statistic)
    .use(Radio)
    .use(Modal)
    .use(Checkbox)
    .use(Badge)
    .use(Tooltip)
    .use(Avatar);

Vue.prototype.$message = message;
