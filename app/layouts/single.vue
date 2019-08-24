<template>
  <div>
    <el-container>
      <el-header>Book Sync</el-header>
      <el-main>
        <nuxt/>
        <nuxt-link to="/">トップに戻る</nuxt-link>
      </el-main>
      <el-footer height="40px;">By Reishi Narisada</el-footer>
    </el-container>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .el-container {
    /*コンテナの中身をブラウザ高さに合わせる*/
    min-height: 100vh;
  }
  .el-header {
    background: -webkit-linear-gradient(85deg, rgb(22, 201, 237), rgb(192, 164, 237));
    background: linear-gradient(85deg, rgb(22, 201, 237), rgb(192, 164, 237));
    color: #ffffff;
    text-align: center;
    line-height: 60px;
  }
  .el-footer {
    background: -webkit-linear-gradient(85deg, rgb(22, 201, 237), rgb(192, 164, 237));
    background: linear-gradient(85deg, rgb(22, 201, 237), rgb(192, 164, 237));
    color: #ffffff;
    text-align: center;
    line-height: 40px;
  }
  .el-main {
    /*height: auto;*/
  }
</style>
