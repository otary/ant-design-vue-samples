<template>
  <a-layout>
    <Header></Header>
    <a-layout-content class="main">
      <a-row>
        <a-col :xxl="{ span: 16, offset: 4}">
          <router-view></router-view>
        </a-col>
      </a-row>
    </a-layout-content>
    <Footer></Footer>
  </a-layout>
</template>

<script>

  export default {
    name: 'HomePage',
    components: {
      'Header': () => import('@/components/Header'),
      'Footer': () => import('@/components/Footer')
    }
  }
</script>

<style scoped lang="scss">
  @import "../styles/scss/mixins";

  .main {
    min-height: calc(100vh - 135px);
    padding: 10px;
    text-align: left;
  }
</style>
