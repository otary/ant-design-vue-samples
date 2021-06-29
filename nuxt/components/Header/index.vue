<template>
  <a-layout-header class="header">
    <a-row>
      <a-col :xs="20" :sm="20" :lg="8" :xxl="{ span: 6, offset: 2}">
        <a class="header-logo" href="#">
          <logo class="logo"/>
          <h2 class="header-title">不求人导航</h2>
        </a>
      </a-col>
      <a-col :xs="4" :sm="4" :lg="16" :xxl="{ span:14, offset: -2 }">
        <a-menu class="menu" mode="horizontal" :selectedKeys="[$route.path]">
          <a-sub-menu>
              <span slot="title">
               <a-icon type="form"/>CSS生成器
             </span>
            <a-menu-item key="/event/mouseevent">
              <nuxt-link to="/event/mouseevent">
                <a-icon type="tablet" class="menu-icon"/>
                CSS边框生成器
              </nuxt-link>
            </a-menu-item>
            <a-menu-item key="/text-style-editor">
              <nuxt-link :to="{ name: 'text-style-editor' }">
                <a-icon type="font-size" class="menu-icon"/>
                CSS文字生成器
              </nuxt-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu>
              <span slot="title">
                <user-auth style="display: inline-block"></user-auth>
             </span>
            <a-menu-item v-if="isLogged" key="logout" @click.native="logout">
              <a-icon type="logout" class="menu-icon"/>
              退出
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="2">
            <a href="https://www.bqrdh.com" target="_blank">
              <a-icon type="home" class="menu-icon"/>
              主站</a>
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
  import {mapActions, mapGetters, mapState} from 'vuex';

  export default {
    name: "Header",
    components: {
      'Logo': () => import('@/components/Logo'),
      'UserAuth': () => import('@/components/User/Auth')
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions({
        logout: 'user/logout'
      })
    },
    computed: {
      ...mapGetters([
        'title',
        'subTitle'
      ]),
      ...mapState({
        isLogged: state => state.user.logged
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/scss/mixins";

  .header {
    background-color: $menu-bg-color;
    border-bottom: 1px solid $gray-200;

    &-logo {
      display: flex;
      align-items: center;
      overflow: hidden;
      text-decoration: none;
      white-space: nowrap;

      &:hover {
        transform: translateY(-8px);
        transition: .3s;
      }

      &__img {
        width: 2.5rem;
        height: $menu-height;
        padding: 10px 0;
      }
    }

    &-title {
      display: inline-block;
      margin: 0;
      font-size: 30px;
      font-weight: 600;
      color: $menu-title-color;
      font-family: cursive;
      text-shadow: 3px 4px 0 rgba(0, 0, 0, .1);
    }

    .menu {
      text-align: right;
      border-bottom: 1px solid $gray-200 !important;

      &.ant-menu-horizontal {
        border-bottom: none;
        height: $menu_height;
        line-height: $menu_height;
      }

      &-icon {
        margin-right: 3px;
      }
    }
  }

  .ant-layout-header {
    height: $menu-height;
    padding: 0 20px;
  }

  @media all and (max-width: 768px) {

    .header {
      &-title {
        font-size: px2rem(25);
      }
    }
  }
</style>
