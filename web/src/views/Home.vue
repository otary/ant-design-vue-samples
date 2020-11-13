<template>
  <div class="home">
    <header class="header">
      <a-row>
        <a-col :xs="20" :sm="20" :md="6" :lg="5" :xl="5" :xxl="4">
          <a class="logo" href="/">
            <img src="../assets/logo.png" alt="logo">
          </a>
        </a-col>
        <a-col :xs="4" :sm="4" :md="18" :lg="19" :xl="19" :xxl="20">
          <a-menu class="menu" mode="horizontal">
            <a-menu-item key="app">组件</a-menu-item>
            <a-sub-menu key="app1">
              <span slot="title">生态组件</span>
              <a-menu-item key="app1-1">设计资源</a-menu-item>
              <a-menu-item key="app1-2">VsCodeExtension</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="app2">支持我们</a-menu-item>
            <a-menu-item key="app3">Vue实战教程</a-menu-item>
            <a-menu-item key="app4">工作</a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </header>
    <div class="main-wrapper">
      <a-row>
        <a-col :xs="24" :sm="24" :md="18" :lg="19" :xl="19" :xxl="20">
          <section class="main-container main-container-component">
            <div class="toc-affix toc-affix-cn" style="width: 150px">
              <a-anchor>
                <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo"/>
                <a-anchor-link href="#components-anchor-demo-static" title="Static demo"/>
                <a-anchor-link
                  href="#components-anchor-demo-basic"
                  title="Basic demo with Target"
                  target="_blank"
                />
                <a-anchor-link href="#API" title="API">
                  <a-anchor-link href="#Anchor-Props" title="Anchor Props"/>
                  <a-anchor-link href="#Link-Props" title="Link Props"/>
                </a-anchor-link>
              </a-anchor>
            </div>
          </section>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    components: {}
  }
</script>

<style scoped lang="scss">

  $menu_height: 64px;

  .header {
    position: relative;
    max-width: 100%;
    background: #fff;
    box-shadow: 0 2px 8px #f0f1f2;
    z-index: 10;
  }


  .logo {
    float: left;
    padding-left: 40px;
    height: $menu_height;
    line-height: $menu_height;
    overflow: hidden;
    text-decoration: none;
    white-space: nowrap;
    img {
      height: 32px;
      margin-right: 16px;
    }
  }

  .menu {
    &.ant-menu-horizontal {
      border-bottom: none;
    }

    &.ant-menu-horizontal > .ant-menu-submenu, &.ant-menu-horizontal > .ant-menu-item {
      height: $menu_height;
      line-height: $menu_height;
      min-width: 72px;
      border-top: 2px solid transparent;
    }
  }


  .toc-affix {
    width: 150px;
    position: fixed;
    top: 100px;
    right: 10px;
  }
</style>
