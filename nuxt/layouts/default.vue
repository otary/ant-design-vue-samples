<template>
    <a-layout>
        <Header/>
        <a-layout-content class="main">
            <a-row>
                <a-col :xxl="{ span: 20, offset: 2}">
                    <nuxt/>
                </a-col>
            </a-row>
        </a-layout-content>
        <Footer/>
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

<style scoped lang="scss">
    .main {
        min-height: calc(100vh - 135px);
        padding: 10px;
        margin-bottom: 50px;
        text-align: left;
        background: url("@/assets/img/bg.svg");
    }
</style>
