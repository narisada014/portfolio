<template>
  <div>
    <el-container>
      <el-header height="50px;">Port Folio</el-header>
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
    background: -webkit-linear-gradient(90deg, rgb(255, 173, 0), rgb(245, 245, 239));
    background: linear-gradient(90deg, rgb(255, 173, 0), rgb(245, 245, 239));
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    opacity: 0.9;
  }
  .el-footer {
    background: -webkit-linear-gradient(90deg, rgb(255, 173, 0), rgb(245, 245, 239));
    background: linear-gradient(90deg, rgb(255, 173, 0), rgb(245, 245, 239));
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
  }
  .el-main {
    padding: 0;
  }
</style>
