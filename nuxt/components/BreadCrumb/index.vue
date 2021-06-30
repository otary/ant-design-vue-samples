<template>
  <a-breadcrumb class="breadcrumb">
    <a-breadcrumb-item v-for="(item,index) in breadcrumbs" :key="item.path">
      <span v-if="index == breadcrumbs.length - 1">
          {{item.title}}
      </span>
      <a v-else @click.prevent="handleLink(item)">{{ item.title }}</a>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
  export default {
    name: "BreadCrumb",
    data() {
      return {
        breadcrumbs: []
      }
    },
    mounted() {
      this.breadcrumbs = this.$route.matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false).map((item) => {
        return {
          title: item.meta.title,
          path: item.path
        }
      });
    },
    methods: {
      handleLink(item) {
        const { redirect, path } = item
        if (redirect) {
          this.$router.push(redirect)
        } else {
          this.$router.push(path || '/')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .breadcrumb {
    padding: 10px 0;
  }
</style>
