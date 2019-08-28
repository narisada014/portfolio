<template>
  <BookRegisters />
</template>

<script>
  import BookRegisters from '../../components/pages/BookRegisters'
  import { Auth } from 'aws-amplify'
  export default {
    components: {
      BookRegisters
    },
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

<style>
  @media screen and (min-width: 767px) {
    .books-register {
      font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体";
      display: flex;
      flex-direction: column;
      width: 500px;
      margin: auto;
      padding-top: 70px;
    }

    .page-title {
    }

    .input-area {
      align-self: center;
      padding-top: 30px;
    }

    .title-label {
      color: black;
      opacity: .5;
    }

    .title {
      width: 500px;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .content-label {
      color: black;
      opacity: .5;
    }

    .book-textarea {
      width: 500px;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .book-image-label {
      color: black;
      opacity: .6;
    }

    .register-container {
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .upload-image {
    }

    .register-button {
      margin-left: auto;

    }

    .register-book {
      height: 50px;
      width: 160px;
    }

    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }

    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }

    .avatar {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
</style>
