<template>
  <!-- footer -->
  <footer>
    <div class="container">
      <div>
        <a href="javasxript:;">
          <img src="../assets/Logo.png" alt="" />
        </a>
      </div>
      <ul class="list">
        <li>
          <p class="title">客戶服務</p>
          <div class="content">
            <a href="javasxript:;">
              <p>運送說明</p>
            </a>
            <a href="javasxript:;"></a>
            <p>退換貨相關</p>
            <a href="javasxript:;"></a>
            <p>付款資訊</p>
            <a href="javasxript:;"></a>
            <p>FAQ</p>
          </div>
        </li>
        <li>
          <p class="title">關於我們</p>
          <div class="content">
            <a href="javasxript:;">
              <p>品牌故事</p>
            </a>
            <a href="javasxript:;">
              <p>媒體聯繫</p>
            </a>
            <a href="javasxript:;">
              <p>Press kit</p>
            </a>
          </div>
        </li>
        <li>
          <p class="title">資訊</p>
          <div class="content">
            <a href="javasxript:;">
              <p>隱私權政策</p>
            </a>
            <a href="javasxript:;">
              <p>Cookie</p>
            </a>
            <a href="javasxript:;">
              <p>GDPR</p>
            </a>
          </div>
        </li>
        <li>
          <a href="javasxript:;"></a>
          <p class="title">追蹤 ALPHA Shop</p>
          <div class="content">
            <a href="javasxript:;">
              <p>+886 02123-45678</p>
            </a>
            <div class="contact">
              <a href="javascript:;"
                ><img src="../assets/icon-fb.svg" alt=""
              /></a>
              <a href="javascript:;"
                ><img src="../assets/icon-ig.svg" alt=""
              /></a>
              <a href="javascript:;"
                ><img
                  src="../assets/icon-phone.svg"
                  alt=""
              /></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
@import "../scss/_mixin.scss";
@import "../scss/_base.scss";
@import "../scss/_reset.scss";

footer {
  display: none;
}
@media (min-width: 981px) {
  footer {
    background-color: $grey;
    padding: 64px 0 80px 0;
    display: block;
    .container {
      display: flex;
      flex-wrap: nowrap;
      > div {
        flex: 0 0 25.5%;
        display: flex;
        align-items: center;
        img {
          width: 175.5px;
        }
      }
      ul.list {
        flex: 1 1 auto;
        display: flex;
        > li {
          flex: 1;
          .title {
            margin-bottom: 24px;
            color: $black;
            @include font(24px, 24px, normal, 700);
          }
          .content {
            p {
              margin-bottom: 8px;
              color: $dark-grey;
              @include font(16px, 17px, normal, 400);
            }
          }
          .contact {
            display: flex;
            a {
              margin-right: 8px;
              &:nth-child(2) {
                margin-right: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
