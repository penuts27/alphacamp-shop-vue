<template>
  <header>
    <div class="header-box">
      <!-- m版按鈕 -->
      <div class="menu-btn">
        <div class="menu-icon"></div>
      </div>
      <h1 class="brand">
        <a href="javascript:;">
          <img
            src="../assets/Logo.png"
            alt="ALPHACAMP-SHOP"
          />
        </a>
      </h1>
      <ul class="nav">
        <li><a href="javascript:;">男款</a></li>
        <li><a href="javascript:;">女款</a></li>
        <li><a href="javascript:;">最新消息</a></li>
        <li><a href="javascript:;">聯絡我們</a></li>
        <li><a href="javascript:;">客製商品</a></li>
      </ul>
      <ul class="social-group">
        <li>
          <a href="javascript:;"
            ><img
              src="../assets/icon-search.svg"
              alt="search"
          /></a>
        </li>
        <li>
          <a href="javascript:;"
            ><img
              src="../assets/icon-cart.svg"
              alt="cart"
          /></a>
        </li>
        <li>
          <a href="javascript:;"
            ><img
              src="../assets/icon-theme.svg"
              alt="theme"
          /></a>
        </li>
      </ul>
    </div>
  </header>
</template>


<style lang="scss" scoped>
@import "../scss/_variables.scss";
@import "../scss/_mixin.scss";
@import "../scss/_base.scss";
@import "../scss/_reset.scss";

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $white;
  z-index: 50;
  .header-box {
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    background-color: $white;
  }
  .menu-btn {
    position: absolute;
    left: 17px;
    top: 17px;
    width: 20px;
    height: 15px;
    .menu-icon {
      width: 100%;
      height: 2px;
      background-color: $black;
      position: absolute;
      top: 0%;
      left: 0;
      &:before,
      &:after {
        content: "";
        position: absolute;
        height: 2px;
        background-color: inherit;
      }
      &:before {
        transform: translateY(6px);
        width: 80%;
      }
      &:after {
        transform: translateY(12px);
        width: 60%;
      }
    }
  }
  .brand {
    width: 100%;
    height: 56px;
    > a {
      display: flex;
      align-items: center;
      margin: 0 auto;
      width: fit-content;
      height: 100%;
      img {
        height: 24px;
      }
    }
  }
  .nav {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: scale(100%, 0);
    transform-origin: top;

    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    > li {
      width: 100%;
      border-bottom: 1px solid rgba($black, 0.1);
      > a {
        display: block;
        padding: 25.5px 0px;
        @include font(16px, 24px, normal, 500);
      }
    }
  }
  .social-group {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: scale(100%, 0);
    transform-origin: top;
    transition: transform 0.3s ease-out 0.1s, opacity 0.3s ease-out;
    > li {
      > a {
        padding: 25.5px 18px;
      }
    }
  }
}
@media (min-width: 981px) {
  header {
    position: relative;
    .header-box {
      flex-direction: row;
      justify-content: space-between;
      max-width: 1100px;
      padding: 0;
    }
    .menu-btn {
      display: none;
    }
    .brand {
      flex: 0 1 25%;
      height: 60px;
    }
    .nav {
      flex: 1;
      width: unset;
      order: -1;
      flex-direction: row;
      position: relative;
      opacity: 1;
      visibility: visible;
      transform: scale(100%, 100%);
      > li {
        border-bottom: none;
        // 最左padding手動移除
        &:first-child {
          > a {
            padding: 0 16px 0 0;
          }
        }
        > a {
          display: block;
          white-space: nowrap;
          padding: 0 16px;
          line-height: 60px;
        }
      }
    }
    .social-group {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      position: relative;
      opacity: 1;
      visibility: visible;
      transform: scale(100%, 100%);
      > li {
        // 最右padding手動移除
        &:last-child {
          > a {
            padding: 18px 0 18px 16px;
          }
        }
        > a {
          display: block;
          padding: 18px 16px;
        }
      }
    }
  }
}

body.active,
html.active {
  overflow: hidden;
}

body.active .nav {
  position: relative;
  opacity: 1;
  visibility: visible;
  transform: scale(100%, 100%);
}
body.active .social-group {
  position: relative;
  opacity: 1;
  visibility: visible;
  transform: scale(100%, 100%);

  display: flex;
  gap: 6px;
  > li {
    > a {
      display: block;
    }
  }
}

body.active .header-box {
  height: 100vh;
}
</style>
