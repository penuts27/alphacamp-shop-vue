<template>
    <div class="btn-control">
        <!-- 第一頁預設關閉上一頁 -->
        <a 
        href="javascript:;" 
        class="button prev"
        :style="{'opacity': btnIsShow.opacity, 'visibility': btnIsShow.opacity.visibility}"
        @click.stop.prevent="handlePrevClicked"
        ><img
                src="../assets/arrow-black.svg" alt="">
            上一步</a>
        <a 
        href="javascript:;" 
        class="button next"
        @click.stop.prevent="handleNextClicked"
        v-if="formPart!==3"
        >下一步<img src="../assets/arrow.svg" alt="next">
        </a>
        <a 
        href="javascript:;" 
        class="button next"
        v-else
        @click.stop.prevent="handleSubmit"
        >送出表單<img src="../assets/arrow.svg" alt="next">
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            formPart: {
                type: Number,
                default: 1
            }
        },
        methods: {
            handlePrevClicked(){
                this.$emit('after-prev-clicked')
            },
            handleNextClicked(){
                this.$emit('after-next-clicked')
            },
            handleSubmit(){
                this.$emit('after-submit')
            }
        },
        computed: {
            btnIsShow(){
                if(this.formPart === 1){
                    return {
                        opacity: 0,
                        visibility: 'hidden'
                    }
                }else{
                    return {
                        opacity: 1,
                        visibility: 'visible'
                    }
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/_variables.scss";
    @import "../scss/_mixin.scss";
    @import "../scss/_base.scss";
    @import "../scss/_reset.scss";

    // button-control
    .btn-control{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        padding-top: 24px;
        margin-bottom: 40px;
        margin-top: 32px;   
        border-top: 1px solid $grey;
        .button{
            width: 100%;
            height: 46px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            &.next{
                color: $white;
                background-color: $primary;
                img{
                    margin-left: 10px;
                }
            }
            &.prev{
                color: #000;
                background-color: transparent;
                img{
                    margin-right: 10px;
                }
            }
        }
    }
    @media (min-width: 981px) {
        .btn-control{
            position: relative;
            top: -70px;
            display: flex;
            justify-content: space-between;
            margin-top: 0;
            margin-bottom: 0;
            .button{
                &.next{
                        width: 32.2%;
                }
                &.prev{
                    width: auto;
                }
            }
        }
    }
</style>