<template>
  <a-layout class="layout">
    <Header></Header>
    <a-row class="main">
      <a-col :xl="{ span: 16, offset: 4}" :xxl="{ span: 16, offset: 4}">
        <router-view></router-view>
      </a-col>
    </a-row>
    <Footer></Footer>
  </a-layout>
</template>

<script>

  export default {
    name: 'HomeLayout',
    components: {
      'Header': () => import('@/components/Header/index'),
      'Footer': () => import('@/components/Footer/index')
    }
  }
</script>

<style scoped lang="scss">

  .layout {
    background: transparent;
  }

  @media all and (max-width: 768px) {
    .main-container {
      box-shadow: none !important;
    }
  }

  .main {
    min-height: calc(100vh - 135px);
    padding: 20px;
  }
</style>
