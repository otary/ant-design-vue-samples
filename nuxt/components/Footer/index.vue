<template>
  <a-layout-footer class="footer">
    © 2020 <a href="https://www.bqrdh.com" target="_blank">不求人导航</a> | <a href="https://beian.miit.gov.cn/"
                                                                        target="_blank">闽ICP备19026837号</a>
  </a-layout-footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      padding: 15px 50px;
      text-align: center;
      background-color: white;
      z-index: 99;
    }
</style>
