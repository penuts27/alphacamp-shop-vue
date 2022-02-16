<template>
    <div class="shop-cart">
        <h4 class="title">購物籃</h4>
        <ul class="card-list">
            <li 
            v-for="product in products" 
            :key="product.id"
            >
                <div class="img-box"><img :src="product.image" :alt="product.name">
                </div>
                <div class="product">
                    <p class="product-name">{{product.name}}</p>
                    <div :class="['amount-control',{'disable': product.number < 1}]">
                        <div 
                        class="circle minus"
                        @click.stop.prevent="handleMinusButtonClicked(product.id)"
                        ><i></i></div>
                        <div class="num">
                            <p>{{product.number}}</p>
                        </div>
                        <div
                        class="circle plus"
                        @click.stop.prevent="handlePlusButtonClicked(product.id)"
                        ><i></i></div>
                    </div>
                    <p class="price">{{product.price * product.number}}</p>
                </div>
            </li>
        </ul>
        <div class="block">
            <p class="item-name">運費</p>
            <p class="item-price">{{deliveryFee === 0 ? '免費' : deliveryFee}}</p>
        </div>
        <div class="block">
            <p class="item-name">小計</p>
            <p class="item-price">{{calculateTotal}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            products:{
                type: Array,
                default: () => {
                    return []
                }
            },
            calculateTotal: {
                type: Number,
                required: true
            },
            deliveryFee: {
                type: Number,
                default: 0
            }
        },
        methods:{
            handlePlusButtonClicked(id){
                this.$emit('after-plus-clicked',id)
            },
            handleMinusButtonClicked(id){
                this.$emit('after-minus-clicked',id)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '../scss/_variables.scss';
    @import "../scss/_mixin.scss";
    @import "../scss/_base.scss";
    @import "../scss/_reset.scss";
  // cart
  .shop-cart{
      width: 100%;
      border: 1px solid $grey2;
      border-radius: 8px;
      padding: 18px 16px 0 16px;
      .title{
          display: none;
          @include font(18px,22px,normal,700);
          margin-bottom: 34px;
      }
      ul.card-list{
          display: flex;
          flex-wrap: wrap; 
          >li{
              width: 100%;
              display: flex;
              margin-bottom: 18px;
              .img-box{
                  position: relative;
                  flex: 0 1 100px;
                  background-color: #999;
                  height: 100px;
                  margin-right: 20px;
                  border-radius: 4px;
                  img{
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                  }
              }
              .product{
                  flex:1;
                  display: flex;
                  flex-direction: column;
                  flex-wrap: wrap;
                  justify-content: space-between; 
                  .product-name{
                      @include font(16px,24px,normal,400);
                      text-align: right;
                  }
                  .price{
                      @include font(16px,24px,normal,700);
                      text-align: right;
                  }
                  
                  .amount-control{
                      display: flex;
                      align-items: center;
                      justify-content: flex-end;
                      // 數量為0時不可點擊狀態
                      &.disable{
                          .circle.minus{
                              opacity: .3;
                              cursor: not-allowed;
                          }
                      }
                      .circle{
                          width: 26px;
                          height: 26px;
                          border-radius: 50%;
                          background-color: $grey2;
                          &.plus,&.minus{
                              i{
                                  position: relative;
                                  top: 50%;
                                  left: 50%;
                                  transform: translate(-50%,-50%);
                                  display: block;
                                  width: 50%;
                                  height: 50%;
                                  &::after{
                                      content: '';
                                      @include poaCenter;
                                      display: inline-block;
                                      width: 100%;
                                      height: 2px;
                                      background-color: #000;
                                  }
                              }
                          }
                          &.plus{
                              i{
                                  &:before{
                                      content: '';
                                      @include poaCenter;
                                      display: inline-block;
                                      width: 100%;
                                      height: 2px;
                                      background-color: #000;
                                      transform: translate(-50%,-50%) rotate(90deg);
                                  }
                              }
                          }
                      }
                      .num{
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          p{
                              padding: 0 22px;
                              @include font(14px,17px,normal,500);
                          }
                      }
                  }
              }
          }
      }
      .block{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          border-top: 1px solid $grey2;
          .item-name{
              @include font(14px,20px,normal,400);
          }
          .item-price{
              @include font(14px,17px,normal,00);
          }
      }
  }
  @include lg{
      .shop-cart{
          padding: 32px 24px 0 24px;
          .title{
              display: block;
          }
          ul.card-list{
              >li{
                  margin-bottom: 34px;
                  .product{
                      flex-direction: row;
                      justify-content: space-between;
                      align-items: flex-start;
                      .product-name{
                          // order: 0;
                      }
                      .price{
                          // order: 1px;
                      }
                      .amount-control{
                          width: 100%;
                          order: 1;
                          justify-content: flex-end;
                      }
                  }
              }
          }
          .block{
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 16px 0 32px 0;
              border-top: 1px solid $grey2;
              .item-name{
                  @include font(14px,20px,normal,400);
              }
              .item-price{
                  @include font(14px,17px,normal,00);
              }
          }
      }
  }
</style>