<template>
  <a-layout>
    <a-layout-header class="header">
      <a-row>
        <a-col :xs="20" :sm="20" :md="8" :lg="7" :xl="5" :xxl="{ span: 4, offset: 4}">
          <a class="header-logo" href="#">
            <logo class="logo"/>
            <h2 class="header-title">全民视频解析</h2>
          </a>
        </a-col>
        <a-col :xs="4" :sm="4" :md="16" :lg="17" :xl="19" :xxl="{ span:12, offset: -4 }">
          <a-menu class="menu" mode="horizontal" :selectedKeys="[$route.path]">
            <!--<a-menu-item key="/bilibili">
                <router-link :to="{ name: 'bilibili' }">
                  <i class="site-icon bilibili-icon"></i>
                  B站
                </router-link>
            </a-menu-item>-->
            <a-menu-item key="2">
              <a href="https://www.bqrdh.com" target="_blank">
                <a-icon type="home"/>
                主站</a>
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content class="main">
      <a-row>
        <a-col :xxl="{ span: 16, offset: 4}">
          <router-view></router-view>
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      © 2020 <a href="https://www.bqrdh.com" target="_blank">不求人导航</a> <a href="https://beian.miit.gov.cn/"
                                                                          target="_blank">闽ICP备19026837号</a>
    </a-layout-footer>
  </a-layout>
</template>

<script>

  export default {
    name: 'HomePage',
    components: {
      'Logo': () => import('@/components/Logo')
    }
  }
</script>

<style scoped lang="scss">

  $menu_height: 64px;

  .header {
    background-color: #fff;

    &-logo {
      display: flex;
      align-items: center;
      overflow: hidden;
      text-decoration: none;
      white-space: nowrap;

      .logo {
        height: 45px;
        margin-right: 16px;
      }
    }

    &-title {
      display: inline-block;
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 1px;
      color: #409afd;
      text-shadow: 3px 4px 0 rgba(0, 0, 0, .1);
    }

    .menu {
      text-align: right;
      &.ant-menu-horizontal {
        border-bottom: none;

        ::v-deep & > .ant-menu-submenu-horizontal,
        ::v-deep  & > .ant-menu-item {
          height: $menu_height;
          line-height: $menu_height;
          min-width: 72px;
        }
      }
    }
  }


  @media all and (max-width: 768px) {

    .ant-layout-header {
      padding: 0 25px;
    }

    .header {
      &-logo {
        img {
          height: 32px;
        }
      }

      &-title {
        font-size: 1.6rem;
      }
    }

  }

  .main {
    min-height: calc(100vh - 135px);
    padding: 10px;
    text-align: left;
  }
</style>
