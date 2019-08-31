<template>
  collectionページ
</template>

<script>
  import { Auth } from 'aws-amplify'
  export default {
    beforeCreate() {
      let loggedIn = false
      try {
        Auth.currentUserInfo().then(user => {
          loggedIn = Boolean(user)
          if (!loggedIn) {
            this.$router.push('/login')
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
</script>

<style lang="scss">
  @media screen and (min-width: 767px) {
  }
</style>
