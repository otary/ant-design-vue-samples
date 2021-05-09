<template>
  <a-layout-header class="header">
    <a-row>
      <a-col :xs="20" :sm="20" :md="8" :lg="7" :xl="5" :xxl="{ span: 4, offset: 4}">
        <a class="header-logo" href="#">
          <logo class="logo"/>
          <h2 class="header-title">不求人导航</h2>
        </a>
      </a-col>
      <a-col :xs="4" :sm="4" :md="16" :lg="17" :xl="19" :xxl="{ span:12, offset: -4 }">
        <a-menu class="menu" mode="horizontal" :selectedKeys="[$route.path]">
           <a-sub-menu>
              <span slot="title">
               <a-icon type="form"/>CSS生成器
             </span>
             <a-menu-item key="/box-style-editor">
               <router-link :to="{ name: 'box-style-editor' }">
                 <a-icon type="tablet" class="menu-icon"/>
                 CSS边框生成器
               </router-link>
             </a-menu-item>
             <a-menu-item key="/text-style-editor">
               <router-link :to="{ name: 'text-style-editor' }">
                 <a-icon type="font-size" class="menu-icon"/>
                 CSS文字生成器
               </router-link>
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
  export default {
    name: "Header",
    components: {
      'Logo': () => import('@/components/Logo')
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/scss/mixins";

  .header {
    background-color: $menu-bg-color;

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

      .logo {
        height: $menu-height;
        padding: px2rem(10);
      }
    }

    &-title {
      display: inline-block;
      margin: 0;
      font-size: px2rem(30);
      font-weight: 600;
      letter-spacing: 1px;
      color: $menu-title-color;
      text-shadow: 3px 4px 0 rgba(0, 0, 0, .1);
    }

    .menu {
      text-align: right;

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
    padding: 0 px2rem(20);
  }

  @media all and (max-width: 768px) {

    .header {
      &-title {
        font-size: px2rem(25);
      }
    }
  }
</style>
