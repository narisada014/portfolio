<template>
  <div>
    <el-main>
      <div class="register-card">
        <el-form status-icon ref="ruleForm" label-width="95px" class="form-area" v-loading="loading">
          <el-form-item label="ユーザーID" prop="user_id" class="user-id-area">
            <el-input v-model="userId" autocomplete="off" style="padding-right: 45px;"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="Password" class="password-area">
            <el-input type="password" v-model="password" autocomplete="off" style="padding-right: 45px;"></el-input>
          </el-form-item>
          <el-form-item class="sign-up-button">
            <el-button type="primary" @click="handleLogin">ログイン</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </div>
</template>

<script>
  import { Auth } from 'aws-amplify';
  export default {
    data() {
      return {
        userId: '',
        password: '',
        loading: false
      };
    },
    mounted() {
      Auth.currentAuthenticatedUser({
        bypassCache: true
      }).then(user => {
        console.log(user)
        if (user) {
          location.href = '/books'
        }
      }).catch(err => {
        console.log(err)
      });
    },
    methods: {
      async handleLogin() {
        try {
          const user = await Auth.signIn(this.userId, this.password)
          // console.log(user)
        } catch(error) {
          console.log(error)
          // TODO: 例外処理
          if (error.code === 'UserNotConfirmedException') {
            console.log('ユーザーはコード認証が済んでいません')
          } else if (error.code === 'PasswordResetRequiredException') {
            console.log('パスワードをリセットしてください')
          } else if (error.code === 'NotAuthorizedException') {
            console.log('そのユーザーは認証できません')
          } else if (error.code === 'UserNotFoundException') {
            console.log('ユーザーはいません')
          } else {
            console.log(error);
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .el-main {
    padding: 0;
    position: relative;
  }

  .register-card {
    display: flex;
    width: 350px;
    height: 350px;
    border: solid 1px #d9d9d9;
    border-radius: 6px;
    margin: 80px auto auto;
  }

  .form-area {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
  }

  .circular {
    margin: auto;
  }

  .email-area {
    justify-content: center;
  }

  .password-area {
    justify-content: center;
  }

  .sign-up-button {
    justify-content: center;
  }

  .modal {
    &.modal-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      z-index: 30;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }
</style>

