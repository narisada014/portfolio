<template>
    <el-container>
      <Header />
      <div class="main">
        <div class="main-image">
          <img class="book-image" src="~/assets/images/main-page.jpg" />
          <p>The connection between the books is human creative. <br>
            知恵が「ツナガル」。</p>
        </div>
      </div>
    </el-container>
</template>

<script>
  import Header from '../organizms/Header'
  import Footer from '../organizms/Footer'
  export default {
    components: {
      Header,
      Footer
    },
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
  .el-container {
    /*コンテナの中身をブラウザ高さに合わせる*/
    min-height: 100vh;
  }

  .main {
    /*padding: 0;*/
    /*margin-bottom: 0;*/
    position: relative;
    flex: auto;
    /*height: 500px;*/
  }

  .main-image {
    position: relative;
    width: 100%;
  }

  .main-image p {
    position: absolute;
    color: mintcream;
    font-weight: bold;
    font-size: 3em;
    font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
  .book-image {
    width: 100%;
    opacity: 0.7;
    height: 500px;
    object-fit: cover;
    filter: brightness(80%);
  }
</style>
