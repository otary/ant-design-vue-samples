<template>
    <a-layout>
        <Header></Header>
        <a-layout-content class="main">
            <a-row>
                <a-col :xxl="{ span: 16, offset: 4}">
                    <nuxt/>
                </a-col>
            </a-row>
        </a-layout-content>
        <Footer></Footer>
    </a-layout>
</template>

<script>
    import 'babel-polyfill'

    export default {
        components: {
            'Header': () => import('@/components/Header/index'),
            'Footer': () => import('@/components/Footer/index')
        },
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

<style>

</style>
