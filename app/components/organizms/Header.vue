<template>
  <header class="main-header">
    <div class="main-icon"><nuxt-link to="/">B|S</nuxt-link></div>
    <div class="right-header">
      <div class="header-button"><nuxt-link to="/sign_in">ログイン</nuxt-link></div>
      <div class="header-button"><nuxt-link to="/sign_in">新規登録</nuxt-link></div>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      handleSelect() {
        console.log('hoge')
      },
      backToHome() {
        console.log('ふー')
      }
    }
  }
</script>

<style lang="scss">
  .main-header {
    position: absolute;
    background-color: transparent;
    color: #333;
    line-height: 60px;
    display: flex;
    flex-direction: row;
    width: 100%;
    font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
  }

  .main-icon {
    margin-left: 20px;
    margin-right: auto;
    z-index: 50;
    font-weight: bold;
    color: gray;
    font-size: 1.5em;
  }

  .right-header {
    margin-bottom:  auto;
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 50;
  }

  .header-button {
    color: gray;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
