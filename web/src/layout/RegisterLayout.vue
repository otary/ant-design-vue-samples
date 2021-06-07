<template>
  <a-layout class="layout">
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
    name: "RegisterLayout",
    components: {
      'Footer': () => import('@/components/Footer/index')
    }
  }
</script>

<style scoped lang="scss">
  .layout {
    background: transparent;
  }

  .main {

  }
</style>
