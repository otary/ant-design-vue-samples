<template>
    <nuxt/>
</template>

<script>
    export default {
        mounted() {
            // 添加Dom渲染后的加载效果
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => {
                    this.$nuxt.$loading.finish()
                }, 300)
            })
        }
    }
</script>

<style scoped>

</style>
