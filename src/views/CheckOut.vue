<template>
      <div class="container">
          <h2 class="title">結帳</h2>
          <div class="row">
              <!-- 左邊資料填寫欄位 -->
              <div class="col-write">
                  <!-- stepper -->
                  <Stepper :formPart="formPart"/>
                  <!-- form -->
                  <form action="get">
                      <!-- 第一頁，使用d-none搭配js控制頁數 -->
                      <div class="part part-1" v-show="formPart === 1">
                          <h3 class="subtitle">寄送地址</h3>
                          <!-- part-wrapper為grid wrapper -->
                          <div class="part-wrapper">
                              <div class="form-group">
                                  <label for="last-name">稱謂</label>
                                  <div class="select-wrapper">
                                      <select 
                                      name="last-name" 
                                      id="last-name" 
                                      v-model="userData.salutation"
                                      require>
                                          <option value="先生" selected>先生</option>
                                          <option value="小姐">小姐</option>
                                      </select>
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label for="first-name">姓名</label>
                                  <input 
                                  type="text" 
                                  id="first-name" 
                                  placeholder="請輸入姓名"
                                  v-model="userData.userName"
                                  >
                              </div>
                              <div class="form-group">
                                  <label for="phone">電話</label>
                                  <input 
                                  type="text" 
                                  id="phone" 
                                  placeholder="請輸入行動電話"
                                  v-model="userData.phone"
                                  >
                              </div>
                              <div class="form-group">
                                  <label for="e-mail">E-mail</label>
                                  <input 
                                  type="text" 
                                  id="e-mail" 
                                  placeholder="請輸入電子郵件"
                                  v-model="userData.email"
                                  >
                              </div>
                              <div class="form-group">
                                  <label for="city">縣市</label>
                                  <div class="select-wrapper">
                                      <select 
                                      name="city" 
                                      id="city" 
                                      v-model="userData.city"
                                      require>
                                          <option value disable selected>請選擇縣市</option>
                                          <option value="台北市">台北市</option>
                                          <option value="新北市">新北市</option>
                                      </select>
                                  </div>
                              </div>
                              <div class="form-group">
                                  <label for="address">地址</label>
                                  <input 
                                  type="text"
                                  id="address" 
                                  placeholder="請輸入地址"
                                  v-model="userData.address"
                                  >
                              </div>
                          </div>
                      </div>
                      <!-- 第二頁 -->
                      <div class="part part-2" v-show="formPart === 2">
                          <h3 class="subtitle">運送方式</h3>
                          <div class="part-wrapper">
                              <div class="form-group">
                                  <!-- 客製化radio btn，input頁面不顯示 -->
                                  <input 
                                  name="transfer-method" 
                                  :value= 0 
                                  id="standard" 
                                  type="radio" 
                                  v-model= "userData.deliveryFee"
                                  checked
                                  />
                                  <label for="standard">
                                      <div class="input-box">
                                          <div class="input"></div>
                                      </div>
                                      <div class="info-box">
                                          <div class="info">
                                              <p>標準運送</p>
                                              <span>免費</span>
                                          </div>
                                          <span>約 3~7 個工作天</span>
                                      </div>
                                  </label>
                                  <input 
                                    name="transfer-method" 
                                    :value= 500
                                    id="DHL" 
                                    type="radio"
                                    v-model= "userData.deliveryFee"
                                  />
                                  <label for="DHL">
                                      <div class="input-box">
                                          <div class="input"></div>
                                      </div>
                                      <div class="info-box">
                                          <div class="info">
                                              <p>DHL 貨運</p>
                                              <span>$500</span>
                                          </div>
                                          <span>48 小時內送達</span>
                                      </div>
                                  </label>

                              </div>
                          </div>
                      </div>
                      <!-- 第三頁 -->
                      <div class="part part-3" v-show="formPart === 3">
                          <h3 class="subtitle">付款資訊</h3>
                          <div class="part-wrapper">
                              <div class="form-group">
                                  <label for="card-owner">持卡人姓名</label>
                                  <input 
                                  type="text" 
                                  id="card-owner" 
                                  placeholder="John Doe"
                                  v-model="userData.cardOwnerName"
                                  >
                              </div>
                              <div class="form-group">
                                  <label for="card-number">卡號</label>
                                  <input 
                                  type="text" 
                                  id="card-number" 
                                  placeholder="1111 2222 3333 4444"
                                  v-model="userData.cardNumber"
                                  >
                              </div>
                              <div class="form-group">
                                  <label for="expiration-date">有效期限</label>
                                  <input 
                                  type="text" 
                                  id="expiration-date" 
                                  placeholder="MM/YY"
                                  v-model="userData.expdatra"
                                  >
                              </div>
                              <div class="form-group">
                                  <label for="address">CVC / CCV </label>
                                  <input 
                                  type="text" 
                                  id="address" 
                                  placeholder="123"
                                  v-model="userData.CVC"
                                  >
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
              <!-- 右邊購物籃區塊 -->
              <div class="col-cart">
                  <ShoppingCart 
                  :products="products" 
                  :deliveryFee="userData.deliveryFee"
                  :calculateTotal="calculateTotal"
                  @after-plus-clicked="afterPlusClicked"
                  @after-minus-clicked="afterMinusClicked"
                  />
              </div>
              <!-- 按鈕區 -->
              <ButtonController 
              :formPart="formPart"
              @after-prev-clicked="afterPrevClicked"
              @after-next-clicked="afterNextClicked"
              @after-submit="afterSubmit"
              />
          </div>
      </div>
</template>

<script>
import Stepper from '../components/Stepper.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import ButtonController from '../components/ButtonController.vue'
import uuid from 'uuid'
// 問題:為何要另外引用
import imageA from '../assets/product-1.jpg'
import imageB from '../assets/product-2.jpg'

const dummyData = [
{
    id: uuid(),
    name: "破壞補丁修身牛仔褲",
    price: 3999,
    number: 2,
    image: imageA
},{
    id: uuid(),
    name: "刷色直筒牛仔褲",
    price: 1299,
    number: 1,
    image: imageB
}]
export default {
  name: "CheckOut",
  components: {
    Stepper,
    ShoppingCart,
    ButtonController
  },
    data(){
        return {
            products:[],
            formPart: 1,
            userData: {
                salutation: '',
                userName: '',
                phone: '',
                email: '',
                city: '',
                address: '',
                deliveryFee: 0,
                cardOwnerName: '',
                cardNumber: '',
                expdatra: '',
                CVC: '',
                totalPrice: 0
            }
        }
    },
    methods: {
        fetchProducts(){
            this.products = dummyData
        },
        afterPlusClicked(id){
            this.products = this.products.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        number: product.number + 1
                    }
                }
                return product
            })
        },
        afterMinusClicked(id){
            console.log('@')
            this.products = this.products.map(product => {
                if (product.id === id && product.number !== 0) {
                    return {
                        ...product,
                        number: product.number - 1
                    }
                }else if (product.id === id && product.number === 0){
                    return {
                        ...product,
                        number: 0
                    }
                }
                return product
            })
        },
        afterPrevClicked(){
            if(this.formPart > 1){
                this.formPart -= 1
            }else{
                this.formPart = 1
            }
        },
        afterNextClicked(){
            if(this.formPart < 3){
                this.formPart += 1
            }else{
                this.formPart = 3
            }
        },
        afterSubmit(){
            // this.$refs.form.submit()
            // const { userData } = this
            this.userData = {
                ...this.userData,
                totalPrice: this.calculateTotal
            }
            // 印出表單submit資料
            console.log(this.userData)
        },
    },
    created(){
        this.fetchProducts()
    },
    computed: {
        calculateTotal(){
            const price = this.products.reduce((pre, cur) => {
                return cur.price * cur.number + pre
            },0)
            // 所有品項 價格*數量 相加
            return price + this.userData.deliveryFee
        }
    }
    };
</script>

<style lang="scss" scoped>
  @import "../scss/_variables.scss";
  @import "../scss/_mixin.scss";
  @import "../scss/_base.scss";
  @import "../scss/_reset.scss";
  
  // global
  .container{
      max-width: 1110px;
      margin: 0 auto;
      padding: 0 15px;
      @media (min-width:981px){
          padding: 0;
      }
  }
  // m版版寬控制區
  main{
      display: block;
      padding-top: 60px;
      .title{
          margin-bottom: 24px;
      }
      .row{
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          .col-write,.col-cart{
              width: 100%;
          }
      }
  }
  // pc版版寬控制區
  @media (min-width: 981px) {
      main{
          .row{
              justify-content: space-between;
              .col-write{
                  width: 48.7%;
              }
              .col-cart{
                  width: 39.7%;
              }
              .btn-control{
                  width: 48.7%;
              }
          }
      }
  }
  .subtitle{
      @include font(24px,24px,normal,700);
      margin-bottom: 24px;
  }
  form{
      margin-bottom: 32px;
      // 預設表單樣式
      .part{
          label{
              display: block;
              margin-bottom: 8px;
              color: $dark-grey;
              @include font(12px,16px,normal,700);
          }
          input,select{
              width: 100%;
              padding: 11px 16px;
              height: 40px;
              border-radius: 4px;
              border: 1px solid $black2;
              @include font(12px,16px,normal,700);
              &::placeholder{
                  color: #999;
                  @include font (12px,16px,normal,400);
              }
          }
          select{
              appearance: none;
              pointer-events: auto;
              cursor: pointer;
          }
          input[type="radio"]{
              appearance: none;
              width: 20px;
              height: 20px;
              appearance: none;
              border: 1px solid $black;
              border-radius: 50%;
              cursor: pointer;
              &:checked{
                  box-shadow: inset 0 0 0 5px $black;
              }
          }
          .select-wrapper{
              position: relative;
              pointer-events: none;
              &:after{
                  content: '';
                  position: absolute;
                  right: 15px;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 0;
                  height: 0;
                  border-style: solid;
                  border-width: 5px 4.5px 0 4.5px;
                  border-color: $black transparent transparent transparent;
              }
          }
      }
      // 個別頁面input grid微調
      .part-1{
          .part-wrapper{
              display: grid;
              grid-template-columns: repeat(5,1fr);
              grid-template-rows: repeat(5,auto);
              gap: 24px 30px;
              .form-group{
                  &:nth-child(1){
                      grid-column: 1 / span 2;
                  }
                  &:nth-child(2){
                      grid-column: 3 / span 3;
                  }
                  &:nth-child(3),&:nth-child(4),&:nth-child(5),&:nth-child(6){
                      grid-column: 1 / span 5;
                  }
              }
          }
      }
      // 個別頁面input grid微調
      .part-2{
          .part-wrapper{
              .form-group{
                  input{
                      display: none;
                      padding: 0;
                      &:checked + label{
                          border: 1px solid $black;
                          .input{
                              box-shadow: inset 0px 0px 0px 5px rgba(0,0,0,1);
                          }
                      }
                  }
                  // 客製化radio btn
                  label{
                      display: block;
                      padding: 10px 13px 10px 20px;
                      margin-bottom: 24px;
                      border: 1px solid #F0F0F5;
                      border-radius: 4px;
                      display: flex;
                      .input-box{
                          flex: 0 0 40px;
                          display: flex;
                          align-items: center;
                          .input{
                              width: 20px;
                              height: 20px;
                              border-radius: 50%;
                              border: 1px solid #222;
                          }
                      }
                      .info-box{
                          display: flex;
                          flex-wrap: wrap;
                          flex: 1;
                          .info{
                              width: 100%;
                              display: flex;
                              justify-content: space-between;
                              margin-bottom: 2px;
                              p{
                                  color: #000;
                                  @include font(14px,20px,normal,400)
                              }
                              span{
                                  color: #000;
                                  @include font(12px,20px,normal,400)
                              }
                          }
                          >span{
                              width: 100%;
                              color: #000;
                              @include font(12px,16px,normal,400)
                          }
                      }
                  }
              }
          }
      }
      // 個別頁面input grid微調
      .part-3{
          .part-wrapper{
              display: grid;
              grid-template-columns: repeat(4,1fr);
              grid-template-rows: repeat(3,auto);
              gap: 24px 30px;
              .form-group{
                  &:nth-child(1),&:nth-child(2){
                      grid-column: 1 / span 4;
                  }
                  &:nth-child(3){
                      grid-column: 1 / span 2;
                  }
                  &:nth-child(4){
                      grid-column: 3 / span 2;
                  }
              }
          }
      }
  }
  @media (min-width: 981px){
      form{
          margin-bottom: 0;
          .part-1 .part-wrapper{
              grid-template-columns: repeat(12,1fr);
              grid-template-rows: repeat(3,auto);
              .form-group{
                  &:nth-child(1),&:nth-child(5){
                      grid-column: 1 / span 4;
                  }
                  &:nth-child(2),&:nth-child(6){
                      grid-column: 5 / span 8;
                  }
                  &:nth-child(3){
                      grid-column: 1 / span 6;
                  }
                  &:nth-child(4){
                      grid-column: 7 / span 6;
                  }
              }
          }
          .part-3{
              .part-wrapper{
                  grid-template-columns: repeat(12,1fr);
                  grid-template-rows: repeat(5,auto);
                  .form-group{
                      &:nth-child(1),&:nth-child(2){
                          grid-column: 1 / span 9;
                      }
                      &:nth-child(3){
                          grid-column: 1 / span 6;
                      }
                      &:nth-child(4){
                          grid-column: 7 / span 6;
                      }
                  }
              }
          }
      }
  }
</style>
