<template>
    <div class="stepper-pannel">
        <div :class="['step', {'active': formPart === 1}, {'focus': formPart > 1}]">
            <div class="circle"></div>
            <div class="label">寄送地址</div>
        </div>
        <div :class="['step', {'active': formPart === 2}, {'focus': formPart === 3}]">
            <div class="circle"></div>
            <span></span>
            <div class="label">運送方式</div>
        </div>
        <div :class="['step', {'active': formPart === 3}]">
            <div class="circle"></div>
            <span></span>
            <div class="label">付款資訊</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            formPart: {
                type: Number,
                default: 1
            }   
        }
    }
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    @import "../scss/_mixin.scss";
    @import "../scss/_base.scss";
    @import "../scss/_reset.scss";
  // step
  .stepper-pannel{
      display: flex;
      width: 100%;
      margin-bottom: 24px;
      .step{
          position: relative;
          flex:1;
          // border: 1px solid #f1f1f1;
          display: flex;
          justify-content: center;
          align-items: center;
          @include gerStepNums(3);
          // active為當前頁面狀態
          &.active{
              .circle{
                  background-color: $black;
                  border:1px solid $black;
                  &:after{
                      color: $white;
                  }
              }
              .label{
                  color: $black;
              }
          }
          // focus為以填寫頁面狀態
          &.focus{
              .circle{
                  background-color: $black;
                  border:1px solid $black;
                  &:after{
                      content: '\2714';
                      color: $white;
                  }
              }
              .label{
                  color: $black;
              }
          }
          // m版首circle齊左
          &:first-child{
              .circle{
                  margin-right: auto;
                  @media (min-width: 981px){
                      margin-right: unset;
                  }
              }
          }
          // m版末circle齊左
          &:last-child{
              .circle{
                  margin-left: auto;
                  @media (min-width: 981px){
                      margin-left: unset;
                  }
              }
              // m版末分隔線微調
              span{
                  left: calc(-50% + 16px + 16px);
                  right: calc(32px + 16px);
                  @media (min-width: 981px){
                      left: calc(-100% + 24px + 72px + 16px);
                      right: calc(100% + 16px);
                  }
              }
          }
          .circle{
              width: 32px;
              height: 32px;
              border-radius: 50%;
              border:1px solid $middle-grey;
              display: flex;
              align-items: center;
              justify-content: center;
          }
          span{
              position: absolute;
              left: calc(-100% + 32px + 16px);
              right: calc(50% + 16px + 16px);
              top: 50%;
              transform : translateY(-50%);
              display: inline-block;
              // width: 100%;
              height: 1px;
              background-color: #000;
          }
          .label{
              display: none;
              color: $middle-grey;
              @include font(16px,24px,normal,400);
          }
      }
      @media (min-width: 981px) {
          .step{
              justify-content: flex-start;
              .label{
                  display: block;
                  margin-left: 8px;
                  @include font(16px,24px,normal,400);
              }
              .circle{
                  width: 24px;
                  height: 24px;
              }
              span{
                  left: calc(-100% + 24px + 72px + 16px);
                  right: calc(100% + 16px);
              }
          }
      }
  }
</style>