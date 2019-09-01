<template>
  <div>
    <div>
      <button @click="handleTestButton" style="margin-top: 100px;">ここをクリック</button>
    </div>
    <div class="collection-main-upper">
      <div class="collection-first">
        <img src="~/assets/images/book-sample-1.png" class="book" alt="" v-if="count >= 0">
      </div>
      <div class="arrow bold"></div>
      <div class="collection-second">
        <img src="~/assets/images/book-sample-2.png" class="book" alt="" v-if="count >= 1">
      </div>
    </div>
    <div class="collection-main-lower">
      <div class="collection-third">
        <img src="~/assets/images/book-sample-3.png" class="book" alt="" v-if="count >= 2">
      </div>
      <div class="arrow bold" v-if="count >= 2"></div>
      <div class="collection-fourth">
        <img src="~/assets/images/book-sample-4.png" class="book" alt="" v-if="count >= 3">
      </div>
    </div>
  </div>
</template>

<script>
  import { Auth } from 'aws-amplify'
  export default {
    // beforeCreate() {
    //   let loggedIn = false
    //   try {
    //     Auth.currentUserInfo().then(user => {
    //       loggedIn = Boolean(user)
    //       if (!loggedIn) {
    //         this.$router.push('/login')
    //       }
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    data() {
      return {
        count: 0
      }
    },
    methods: {
      handleTestButton() {
        this.count += 1
        console.log(this.count)
      }
  }
  }
</script>

<style lang="scss">
  @media screen and (min-width: 767px) {
    .collection-main-upper {
      display: flex;
      /*justify-content: center;*/
      /*justify-content: space-around;*/
      /*align-items: center;*/
      width: 700px;
      height: 350px;
      margin: auto;
    }

    .collection-main-lower {
      display: flex;
      /*justify-content: center;*/
      /*justify-content: space-around;*/
      /*align-items: center;*/
      width: 700px;
      height: 350px;
      margin: auto;
    }

    .collection-first {
      /*margin: auto;*/
      margin-left: 50px;
    }
    .arrow{
      position: relative;
      display: inline-block;
      padding: 0 0 0 16px;
      color: #000;
      vertical-align: middle;
      text-decoration: none;
      font-size: 15px;
    }
    .arrow::before,
    .arrow::after{
      position: absolute;
      top: -140px;
      bottom: 0;
      left: 0;
      margin: auto;
      content: "";
      vertical-align: middle;
    }

    .bold::before {
      left: 20px;
      width: 70px;
      height: 15px;
      background: indianred;
    }

    .bold::after {
      left: 60px;
      width: 40px;
      height: 40px;
      border-top: 15px solid indianred;
      border-right: 15px solid indianred;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .collection-second {
      /*margin: auto;*/
      margin-left: 100px;
    }
    .collection-third {
      /*margin: auto;*/
      margin-left: 50px;
    }
    .collection-fourth {
      /*margin: auto;*/
      margin-left: 100px;
    }
    .book {
      width: 60%;
      /*height: 150px;*/
      display: block;
      margin: auto;
    }
  }
</style>
