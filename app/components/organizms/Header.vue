<template>
  <header class="main-header">
    <div class="main-icon"><nuxt-link to="/">B|S</nuxt-link></div>
    <div class="right-header">
      <div class="header-button" v-if="!isLoggedIn"><nuxt-link to="/login">ログイン</nuxt-link></div>
      <div class="header-button" v-if="!isLoggedIn"><nuxt-link to="/sign_up">新規登録</nuxt-link></div>
      <div class="sign-out-button" v-if="isLoggedIn" @click="signOut">ログアウト</div>
    </div>
  </header>
</template>

<script>
  import { Auth } from 'aws-amplify'

  export default {
    data() {
      return {
        isLoggedIn: false
      }
    },
    beforeCreate() {
        try {
          Auth.currentUserInfo().then(user => {
            this.isLoggedIn = Boolean(user);
          })
        } catch (error) {
          console.log(error)
        }
    },
    // mounted() {
    //   Auth.currentUserInfo().then(user => {
    //     console.log(user)
    //     if (user) {
    //       this.isLoggedIn = true
    //     } else {
    //       this.isLoggedIn = false
    //       location.href = '/login'
    //     }
    //   }).catch(err => {
    //     console.log(err)
    //     this.isLoggedIn = false
    //     location.href = '/login'
    //   });
    // },
    methods: {
      handleSelect() {
        console.log('hoge')
      },
      backToHome() {
        console.log('ふー')
      },
      signOut() {
        Auth.signOut({ global: true })
          .then(data => {
            console.log(data)
            this.isLoggedIn = false
            this.$router.push('/login')
          })
          .catch(err => console.log(err));
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

  .sign-out-button {
    color: gray;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
</style>
