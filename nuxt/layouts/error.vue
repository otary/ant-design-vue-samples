<template>
    <div>
        <div class="text-container">
            <h1 class="title">{{ error.statusCode }}!</h1>
            <div>
                此地一片荒芜....
            </div>
            <br/>
            <a-button type="primary" @click="handleBack">立即返航</a-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error'],
        layout: function () {
            return 'fullscreen'
        },
        methods: {
            handleBack() {
                this.$router.push({
                    path: '/'
                })
            }
        }
    }
</script>

<style>
    body {
        background: url("@/assets/img/404.jpg");
        background-size: cover;
    }
</style>

<style scoped lang="scss">
    .text-container {
        position: absolute;
        top: 20%;
        left: 30%;
    }

    .title {
        margin: 0;
        font-size: 6rem;
        font-family: fantasy;
    }
</style>
